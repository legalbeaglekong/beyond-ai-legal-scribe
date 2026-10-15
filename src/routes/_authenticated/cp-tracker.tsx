import { createFileRoute } from '@tanstack/react-router';
import { supabase } from '@/integrations/supabase/client';
import { Tracker } from '@/components/cp-tracker/Tracker';

export const Route = createFileRoute('/_authenticated/cp-tracker')({
  head: () => ({ meta: [
    { title: 'CP Closing Tracker Demo | Beyond Horizons' },
    { name: 'description', content: 'Private demonstration of an unsecured aircraft-lessor loan conditions precedent tracker with human review gates.' },
    { name: 'robots', content: 'noindex, nofollow' },
    { property: 'og:title', content: 'CP Closing Tracker Demo | Beyond Horizons' },
    { property: 'og:description', content: 'Private conditions precedent tracker demo with human review gates.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
  ], links: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap' }] }),
  loader: async () => {
    const { data, error } = await supabase.from('cp_reviews').select('*').order('created_at', { ascending: false });
    if (error) throw new Error('Saved reviews could not be loaded. Please retry.');
    return { reviews: data };
  },
  component: CpTrackerPage,
});
function CpTrackerPage() { const { reviews } = Route.useLoaderData(); return <Tracker reviews={reviews}/>; }