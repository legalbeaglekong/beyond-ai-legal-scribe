import { createFileRoute } from '@tanstack/react-router';
import { FleetDemo } from '@/components/fleet-demo/FleetDemo';

export const Route = createFileRoute('/fleet-risk')({
  ssr: false,
  head: () => ({
    meta: [
      { title: 'Fleet Risk Monitor Demo | Beyond Horizons' },
      { name: 'description', content: 'Interactive demo for aircraft lessors and lenders: a simulated fleet map, explained risk scores and covenant flags against sample lease and insurance terms.' },
      { name: 'robots', content: 'noindex, nofollow' },
      { property: 'og:title', content: 'Fleet Risk Monitor Demo | Beyond Horizons' },
      { property: 'og:description', content: 'Simulated fleet monitoring with covenant and insurance flags for review. Fictional data only.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
    links: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap' }],
  }),
  component: FleetDemo,
});
