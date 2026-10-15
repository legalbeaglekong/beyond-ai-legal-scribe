import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { Mail } from 'lucide-react';
import { requestDemoLink } from '@/lib/private-demos.functions';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import logo from '@/assets/bh-logo.svg';
import { demoDestination, rememberDemoDestination, rememberedDemoDestination, clearDemoDestination } from '@/lib/demo-return';
import { useQuery } from '@tanstack/react-query';

export const Route = createFileRoute('/auth')({
  validateSearch: (search: Record<string, unknown>) => ({ redirect: demoDestination(search['redirect']) }),
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
  const { data: signedIn } = useQuery({ queryKey: ['private-demo-session'], queryFn: async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return false;
    const { data: allowed, error: accessError } = await supabase.rpc('has_private_demo_access');
    if (accessError) throw accessError;
    return allowed === true;
  }, retry: false });
  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.slice(1));
    if (hash.has('error') || hash.has('error_code')) {
      setError('This sign-in link has expired or already been used. Request a new link below and open the newest email once.');
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);
  useEffect(() => {
    if (!signedIn) return;
    const target = Route.useSearch;
    const next = destination === '/demos' ? rememberedDemoDestination() ?? destination : destination;
    clearDemoDestination();
    void navigate({ to: next, replace: true });
  }, [signedIn, navigate, destination]);
  async function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setError('');
    rememberDemoDestination(destination);
    try {
      await sendLink({ data: { email, destination } });
      setSent(true);
    } catch { setError('The sign-in email could not be sent. Please try again later.'); }
    finally { setBusy(false); }
  }
  return <main className="min-h-screen bg-background flex items-center justify-center p-6"><div className="w-full max-w-sm text-center space-y-6"><img src={logo} alt="Beyond Horizons" width="88" height="88" className="mx-auto"/><p className="text-xs text-accent">PRIVATE &amp; CONFIDENTIAL</p><h1 className="text-3xl">Private demos</h1>{sent ? <p role="status" className="text-muted-foreground">If this email is approved, a sign-in link is on its way. Please check your inbox and spam folder.</p> : <form onSubmit={signIn} className="space-y-5"><label className="block text-left text-sm">Work email<input type="email" autoComplete="email" required maxLength={254} value={email} onChange={e=>setEmail(e.target.value)} className="mt-2 w-full rounded border border-border bg-background text-foreground p-3"/></label><Button type="submit" variant="outline" disabled={busy} className="w-full"><Mail/>{busy ? 'Sending…' : 'Email sign-in link'}</Button></form>}{error && <p role="alert" className="text-destructive">{error}</p>}</div></main>;
}