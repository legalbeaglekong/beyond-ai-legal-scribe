import { createFileRoute } from '@tanstack/react-router';
import { MeridianTracker } from '@/components/meridian-tracker/Tracker';

export const Route = createFileRoute('/meridian-tracker')({
  head: () => ({
    meta: [
      { title: 'Project Meridian CP Tracker Demo | Beyond Horizons' },
      { name: 'description', content: 'Public demonstration of a multi-jurisdiction conditions precedent closing tracker for an LMA-based data centre financing, with named human review gates.' },
      { name: 'robots', content: 'noindex, nofollow' },
      { property: 'og:title', content: 'Project Meridian CP Tracker Demo | Beyond Horizons' },
      { property: 'og:description', content: 'Public CP closing tracker demo with human review gates on a fictional data centre financing.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
    links: [
      { rel: 'canonical', href: 'https://demos.beyondhorizons.sg/meridian-tracker' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap' },
    ],
  }),
  component: MeridianTrackerPage,
});
function MeridianTrackerPage() { return <MeridianTracker />; }
