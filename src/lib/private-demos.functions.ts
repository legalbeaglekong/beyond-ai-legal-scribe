import { createServerFn } from '@tanstack/react-start';
import { getRequest } from '@tanstack/react-start/server';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

export const requestDemoLink = createServerFn({ method: 'POST' })
  .inputValidator(z.object({ email: z.string().trim().email().max(254), destination: z.enum(['/cp-tracker', '/fleet-risk', '/demos']) }))
  .handler(async ({ data }) => {
    const request = getRequest();
    const origin = request.headers.get('origin') ?? new URL(request.url).origin;
    const url = new URL(origin);
    const allowedHost = ['beyondhorizons.sg', 'www.beyondhorizons.sg', 'demos.beyondhorizons.sg', 'beyondhorizonslegal.lovable.app', 'id-preview--ecf7d6df-70cf-44b3-8d5d-0047ba108723.lovable.app', 'localhost'];
    if (!allowedHost.includes(url.hostname) || (url.protocol !== 'https:' && url.hostname !== 'localhost')) throw new Error('Invalid sign-in origin');
    const email = data.email.toLowerCase();
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { data: access, error } = await supabaseAdmin.rpc('private_demo_email_allowed', { _email: email });
    if (error) throw new Error('Sign-in is temporarily unavailable');
    // Same response for unapproved emails; never disclose the private list.
    if (!access) return { accepted: true };
    const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
    const backend = process.env['SUPABASE_URL'];
    if (!key || !backend) throw new Error('Sign-in is temporarily unavailable');
    const client = createClient(backend, key, { auth: { persistSession: false, autoRefreshToken: false }, global: { fetch: (input, init) => {
      const headers = new Headers(init?.headers);
      if (key.startsWith('sb_') && headers.get('Authorization') === `Bearer ${key}`) headers.delete('Authorization');
      headers.set('apikey', key);
      return fetch(input, { ...init, headers });
    } } });
    const { error: sendError } = await client.auth.signInWithOtp({ email, options: { shouldCreateUser: true, emailRedirectTo: `${url.origin}/auth?redirect=${encodeURIComponent(data.destination)}` } });
    if (sendError) throw new Error('The sign-in email could not be sent. Please try again later.');
    return { accepted: true };
  });