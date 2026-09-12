import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const LANGUAGE_NAMES: Record<string, string> = {
  "zh": "Simplified Chinese",
  "zh-TW": "Traditional Chinese",
  "ja": "Japanese",
  "ko": "Korean",
  "vi": "Vietnamese",
  "th": "Thai",
  "id": "Indonesian",
  "ms": "Malay",
  "es": "Spanish",
  "fr": "French",
  "de": "German",
  "ar": "Arabic",
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple hash function for cache keys
function hashText(text: string): string {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(36);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text, targetLanguage } = await req.json();

    if (!text || !targetLanguage) {
      return new Response(
        JSON.stringify({ error: "Missing text or targetLanguage" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const textHash = hashText(text);
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check cache first
    const { data: cached } = await supabase
      .from("translation_cache")
      .select("translated_text")
      .eq("text_hash", textHash)
      .eq("target_language", targetLanguage)
      .maybeSingle();

    if (cached?.translated_text) {
      console.log("Cache hit for:", textHash, targetLanguage);
      return new Response(
        JSON.stringify({ translatedText: cached.translated_text, cached: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Cache miss, translating:", textHash, targetLanguage);

    const languageName = LANGUAGE_NAMES[targetLanguage] || targetLanguage;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are a professional legal document translator. Translate the following English text to ${languageName}. 
            
IMPORTANT RULES:
- Maintain the exact meaning and legal terminology
- Preserve any formatting, bullet points, or structure
- Keep proper nouns (company names, place names) in their original form where appropriate
- For legal terms, use the standard ${languageName} legal terminology
- Return ONLY the translated text, nothing else`,
          },
          {
            role: "user",
            content: text,
          },
        ],
        temperature: 0.1,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const translatedText = data.choices?.[0]?.message?.content || text;

    // Store in cache (fire-and-forget, don't block response)
    supabase
      .from("translation_cache")
      .upsert({
        text_hash: textHash,
        source_text: text,
        target_language: targetLanguage,
        translated_text: translatedText,
      }, { onConflict: "text_hash,target_language" })
      .then(({ error }) => {
        if (error) console.error("Cache write error:", error);
        else console.log("Cached translation for:", textHash, targetLanguage);
      });

    return new Response(
      JSON.stringify({ translatedText, cached: false }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Translation error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
