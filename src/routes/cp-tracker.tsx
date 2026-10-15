import { createFileRoute } from '@tanstack/react-router';
import { Tracker } from '@/components/cp-tracker/Tracker';

export const Route = createFileRoute('/cp-tracker')({
  head: () => ({ meta: [
    { title: 'CP Closing Tracker Demo | Beyond Horizons' },
    { name: 'description', content: 'Public demonstration of an unsecured aircraft-lessor loan conditions precedent tracker with human review gates.' },
    { name: 'robots', content: 'noindex, nofollow' },
    { property: 'og:title', content: 'CP Closing Tracker Demo | Beyond Horizons' },
    { property: 'og:description', content: 'Public conditions precedent tracker demo with human review gates.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
  ], links: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap' }] }),
  component: CpTrackerPage,
});
function CpTrackerPage() { return <Tracker reviews={[]} publicView/>; }