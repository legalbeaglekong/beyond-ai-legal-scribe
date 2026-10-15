import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { lovable } from '@/integrations/lovable';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import logo from '@/assets/bh-logo.svg';

export const Route = createFileRoute('/auth')({
  head: () => ({ meta: [{ title: 'Private tracker sign-in | Beyond Horizons' }, { name: 'description', content: 'Sign in to the private Beyond Horizons CP tracker demo.' }, { name: 'robots', content: 'noindex, nofollow' }, { property: 'og:title', content: 'Private tracker sign-in | Beyond Horizons' }, { property: 'og:description', content: 'Private CP tracker demo access.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
  component: TrackerSignIn,
});
function TrackerSignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let active = true;
    supabase.auth.getUser().then(({ data }) => { if (active && data.user) navigate({ to: '/cp-tracker', replace: true }); });
    return () => { active = false; };
  }, [navigate]);
  async function signIn() {
    setBusy(true); setError('');
    try {
      const result = await lovable.auth.signInWithOAuth('google', { redirect_uri: `${window.location.origin}/auth` });
      if (result.error) throw result.error;
      const { data } = await supabase.auth.getUser();
      if (data.user) await navigate({ to: '/cp-tracker', replace: true });
    } catch { setError('Sign-in could not be completed. Please try again.'); }
    finally { setBusy(false); }
  }
  return <main className="min-h-screen bg-background flex items-center justify-center p-6"><div className="max-w-sm text-center space-y-6"><img src={logo} alt="Beyond Horizons" width="88" height="88" className="mx-auto"/><p className="text-xs text-accent">PRIVATE &amp; CONFIDENTIAL</p><h1 className="text-3xl">CP tracker demo</h1><p className="text-muted-foreground">Sign in to continue.</p><Button variant="outline" disabled={busy} onClick={signIn}>{busy ? 'Signing in…' : 'Continue with Google'}</Button>{error && <p role="alert" className="text-destructive">{error}</p>}</div></main>;
}