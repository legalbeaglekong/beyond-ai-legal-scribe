const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'

const BodySchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(200).optional().default(''),
  message: z.string().trim().min(1).max(5000),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { name, email, company, message } = parsed.data

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    // Build email HTML
    const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Georgia, serif; color: #1f1f1f; padding: 20px; background: #faf9f7;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; padding: 32px; border: 1px solid #e8e4df;">
    <h1 style="color: #8b2332; font-size: 22px; margin-bottom: 24px; border-bottom: 2px solid #8b2332; padding-bottom: 12px;">
      New Contact Inquiry — Beyond Horizons
    </h1>
    <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
      <tr><td style="padding: 8px 0; font-weight: bold; width: 120px; vertical-align: top;">Name:</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #8b2332;">${escapeHtml(email)}</a></td></tr>
      ${company ? `<tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Company:</td><td style="padding: 8px 0;">${escapeHtml(company)}</td></tr>` : ''}
      <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td><td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(message)}</td></tr>
    </table>
    <hr style="border: none; border-top: 1px solid #e8e4df; margin: 24px 0 12px;" />
    <p style="font-size: 12px; color: #999;">This inquiry was submitted via the Beyond Horizons website contact form.</p>
  </div>
</body>
</html>`

    // Send via Resend if key available, otherwise use a simple SMTP-like fallback
    if (RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Beyond Horizons <noreply@notify.rafflesconcierge.lexhygroup.com>',
          to: ['hl@beyondhorizons.sg', 'soniam@beyondhorizons.sg'],
          reply_to: email,
          subject: `New Inquiry from ${name}${company ? ` (${company})` : ''}`,
          html: emailHtml,
        }),
      })

      if (!res.ok) {
        const errBody = await res.text()
        console.error('Email send failed:', errBody)
        throw new Error('Failed to send email')
      }
    } else {
      // Fallback: log the inquiry (no email key configured)
      console.log('Contact inquiry received (no RESEND_API_KEY):', { name, email, company, message: message.substring(0, 100) })
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
