import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { Mail } from 'lucide-react';
import { requestDemoLink } from '@/lib/private-demos.functions';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import logo from '@/assets/bh-logo.svg';

export const Route = createFileRoute('/auth')({
  validateSearch: (search: Record<string, unknown>): { redirect?: '/fleet-risk' | '/cp-tracker' | '/demos' } => search['redirect'] === '/fleet-risk' ? { redirect: '/fleet-risk' } : search['redirect'] === '/cp-tracker' ? { redirect: '/cp-tracker' } : {},
  head: () => ({ meta: [{ title: 'Private demo sign-in | Beyond Horizons' }, { name: 'description', content: 'Email-only access to the private Beyond Horizons demonstrations for approved recipients.' }, { name: 'robots', content: 'noindex, nofollow' }, { property: 'og:title', content: 'Private demo sign-in | Beyond Horizons' }, { property: 'og:description', content: 'Approved-recipient access to private Beyond Horizons demos.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
  component: TrackerSignIn,
});
function TrackerSignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const destination = Route.useSearch().redirect ?? '/demos';
  const sendLink = useServerFn(requestDemoLink);
  useEffect(() => {
    let active = true;
    supabase.auth.getUser().then(async ({ data }) => {
      if (!active || !data.user) return;
      const { data: allowed } = await supabase.rpc('has_private_demo_access');
      if (!active) return;
      if (allowed) void navigate({ to: destination, replace: true });
      else { await supabase.auth.signOut(); setError('This account does not have private demo access.'); }
    });
    return () => { active = false; };
  }, [navigate, destination]);
  async function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setError('');
    try {
      await sendLink({ data: { email, destination } });
      setSent(true);
    } catch { setError('The sign-in email could not be sent. Please try again later.'); }
    finally { setBusy(false); }
  }
  return <main className="min-h-screen bg-background flex items-center justify-center p-6"><div className="w-full max-w-sm text-center space-y-6"><img src={logo} alt="Beyond Horizons" width="88" height="88" className="mx-auto"/><p className="text-xs text-accent">PRIVATE &amp; CONFIDENTIAL</p><h1 className="text-3xl">Private demos</h1>{sent ? <p role="status" className="text-muted-foreground">If this email is approved, a sign-in link is on its way. Please check your inbox and spam folder.</p> : <form onSubmit={signIn} className="space-y-5"><label className="block text-left text-sm">Work email<input type="email" autoComplete="email" required maxLength={254} value={email} onChange={e=>setEmail(e.target.value)} className="mt-2 w-full rounded border border-border bg-background text-foreground p-3"/></label><Button type="submit" variant="outline" disabled={busy} className="w-full"><Mail/>{busy ? 'Sending…' : 'Email sign-in link'}</Button></form>}{error && <p role="alert" className="text-destructive">{error}</p>}</div></main>;
}