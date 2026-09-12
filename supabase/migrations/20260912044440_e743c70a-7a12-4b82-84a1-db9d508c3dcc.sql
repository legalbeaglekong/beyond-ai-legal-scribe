CREATE TABLE public.translation_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  text_hash TEXT NOT NULL,
  source_text TEXT NOT NULL,
  target_language TEXT NOT NULL,
  translated_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(text_hash, target_language)
);

GRANT SELECT, INSERT ON public.translation_cache TO anon, authenticated;
GRANT ALL ON public.translation_cache TO service_role;

ALTER TABLE public.translation_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read cached translations"
  ON public.translation_cache FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert cached translations"
  ON public.translation_cache FOR INSERT
  WITH CHECK (true);

CREATE INDEX idx_translation_cache_lookup ON public.translation_cache(text_hash, target_language);

CREATE TABLE public.ebook_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  title TEXT,
  company_name TEXT,
  official_email TEXT NOT NULL UNIQUE,
  funding_stage TEXT,
  launch_window TEXT,
  regulatory_concerns TEXT[] NOT NULL DEFAULT '{}',
  source TEXT NOT NULL DEFAULT 'ascending-asia-legacy',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.ebook_leads TO service_role;

ALTER TABLE public.ebook_leads ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_ebook_leads_updated_at
BEFORE UPDATE ON public.ebook_leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();