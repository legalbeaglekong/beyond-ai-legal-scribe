import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beyond Horizons - Legal Services | Singapore',
  description: 'Professional legal services and solutions in Singapore. Beyond Horizons offers expert legal advice and representation.',
  keywords: 'legal services, Singapore law, legal advice, legal representation, Singapore lawyer',
  authors: [{ name: 'Beyond Horizons' }],
  openGraph: {
    title: 'Beyond Horizons - Legal Services | Singapore',
    description: 'Professional legal services and solutions in Singapore.',
    url: 'https://beyondhorizons.sg',
    siteName: 'Beyond Horizons',
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Horizons - Legal Services | Singapore',
    description: 'Professional legal services and solutions in Singapore.',
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
      <body>{children}</body>
    </html>
  )
}

