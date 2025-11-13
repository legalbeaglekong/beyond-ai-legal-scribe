import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beyond Horizons | Global Legal Innovation for Transportation & Space | Bethel Chambers LLC',
  description: 'Award-winning legal services with top lawyers ranked for Singapore, Asia Pacific and cross-border M&A, finance, compliance and more. Chambers Global ranked legal expertise.',
  keywords: 'aviation law, space law, maritime law, sustainable aviation fuel, ESG legal, transportation law, cross-border transactions, Singapore lawyer, aircraft leasing, space mining, green hydrogen legal',
  authors: [{ name: 'Beyond Horizons, Bethel Chambers LLC' }],
  openGraph: {
    title: 'Beyond Horizons | Legal Innovation for Transportation & Space Industries',
    description: 'Award-winning legal services with top lawyers ranked for Singapore, Asia Pacific and cross-border M&A, finance, compliance and more. Chambers Global ranked expertise.',
    type: 'website',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lovable_dev',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://beyondhorizons.sg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/lovable-uploads/3e884989-0557-4f58-9a41-44950479350e.png" type="image/png" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
