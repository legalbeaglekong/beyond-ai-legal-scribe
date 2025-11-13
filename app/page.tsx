import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beyond Horizons - Professional Legal Services in Singapore',
  description: 'Beyond Horizons provides expert legal services in Singapore. Trusted legal advisors for businesses and individuals.',
  alternates: {
    canonical: 'https://beyondhorizons.sg',
  },
}

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <h1>Beyond Horizons</h1>
        <p>Professional Legal Services in Singapore</p>
        <p>Server-side rendered website optimized for SEO.</p>
      </div>
    </main>
  )
}

