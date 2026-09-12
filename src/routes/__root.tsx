import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import WhatsAppFab from "@/components/WhatsAppFab";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";

import appCss from "../styles.css?url";

const ORGANIZATION_JSONLD = `{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://beyondhorizons.sg/#organization",
  "name": "Beyond Horizons",
  "alternateName": "Beyond Horizons by Bethel Chambers LLC",
  "url": "https://beyondhorizons.sg/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://beyondhorizons.sg/logo.png",
    "width": 500,
    "height": 500
  },
  "image": "https://beyondhorizons.sg/og-image.jpg",
  "description": "Singapore-anchored, cross-border legal counsel for boards, founders and senior executives across APAC, EU, UK and the Americas.",
  "email": "HL@beyondhorizons.sg",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "39B Neil Road, #03-01",
    "addressLocality": "Singapore",
    "postalCode": "088823",
    "addressCountry": "SG"
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "Bethel Chambers LLC",
    "identifier": "UEN 202007868D",
    "url": "https://bethelchambers.com/"
  },
  "founder": {
    "@type": "Person",
    "name": "Hui Ling Teo",
    "jobTitle": "Founder",
    "worksFor": "Beyond Horizons by Bethel Chambers LLC",
    "email": "HL@beyondhorizons.sg",
    "award": [
      "Chambers Asia-Pacific — Asset Finance (Band 3), ranked 6 years",
      "Legal 500 Next Generation Partner 2023"
    ],
    "sameAs": [
      "https://chambers.com/lawyer/hui-ling-teo-global-2:25705527",
      "https://sg.linkedin.com/in/huilingt"
    ]
  },
  "areaServed": [
    { "@type": "Country", "name": "Singapore" },
    { "@type": "Place", "name": "Asia-Pacific" },
    { "@type": "Place", "name": "Global" }
  ],
  "knowsAbout": [
    "Singapore Law", "Cross-border M&A", "Space Law", "AI Governance",
    "EU AI Act", "Employment Law", "Restructuring and Insolvency",
    "Aviation Law", "Cape Town Convention", "Robotics Law",
    "Alternative Energy",
    "Fractional General Counsel", "Blockchain and Digital Assets",
    "Trade and Tariff Law"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Practice Areas",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Space Law", "url": "https://beyondhorizons.sg/singapore-space-law" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Governance", "url": "https://beyondhorizons.sg/singapore-ai-governance" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employment Law", "url": "https://beyondhorizons.sg/singapore-employment-law" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Restructuring & Insolvency", "url": "https://beyondhorizons.sg/singapore-restructuring-insolvency" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aviation Law", "url": "https://beyondhorizons.sg/singapore-aviation-law" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Robotics Law", "url": "https://beyondhorizons.sg/singapore-robotics-law" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Alternative Energy Law", "url": "https://beyondhorizons.sg/singapore-alternative-energy-law" } }
    ]
  },
  "sameAs": [
    "https://www.linkedin.com/company/bethelchambers",
    "https://www.linkedin.com/company/beyondhorizonslegal",
    "https://chambers.com/law-firm/hui-ling-law-practice-a-part-of-bethel-chambers-llc-asia-pacific-8:23622358",
    "https://www.lawsociety.org.sg/find-a-lawyer/bethel-chambers-llc/",
    "https://www.insights.beyondhorizons.sg",
    "https://beyondhorizons.substack.com/",
    "https://bethelchambers.com/"
  ]
}`;

const WEBSITE_JSONLD = `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Beyond Horizons",
  "url": "https://beyondhorizons.sg/",
  "publisher": { "@id": "https://beyondhorizons.sg/#organization" }
}`;

const FOUNDER_JSONLD = `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hui Ling Teo",
  "jobTitle": "Founder",
  "description": "Dual-qualified lawyer — English solicitor and Singapore advocate & solicitor. Founder of Beyond Horizons (a specialist practice group of Bethel Chambers LLC).",
  "worksFor": {
    "@id": "https://beyondhorizons.sg/#organization"
  },
  "email": "HL@beyondhorizons.sg",
  "award": [
    "Chambers Asia-Pacific — Asset Finance (Band 3), ranked 6 years",
    "Legal 500 Next Generation Partner 2023"
  ],
  "sameAs": [
    "https://chambers.com/lawyer/hui-ling-teo-global-2:25705527",
    "https://sg.linkedin.com/in/huilingt"
  ]
}`;

const ASSOCIATE_JSONLD = `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sonia Motwani",
  "jobTitle": "Associate",
  "description": "Qualified as a solicitor in England and Wales. LLB, University of Birmingham.",
  "worksFor": {
    "@id": "https://beyondhorizons.sg/#organization"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "University of Birmingham"
  },
  "sameAs": [
    "https://uk.linkedin.com/in/sonia-motwani"
  ]
}`;

const REVIEW_1_JSONLD = `{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": { "@id": "https://beyondhorizons.sg/#organization" },
  "author": { "@type": "Organization", "name": "Chambers and Partners" },
  "publisher": { "@type": "Organization", "name": "Chambers Asia-Pacific" },
  "datePublished": "2025",
  "reviewBody": "A fantastic lawyer and strategist with significant industry expertise."
}`;

const REVIEW_2_JSONLD = `{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": { "@id": "https://beyondhorizons.sg/#organization" },
  "author": { "@type": "Organization", "name": "Chambers and Partners" },
  "publisher": { "@type": "Organization", "name": "Chambers Asia-Pacific" },
  "datePublished": "2025",
  "reviewBody": "Offers very high-quality advice."
}`;

const REVIEW_3_JSONLD = `{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": { "@id": "https://beyondhorizons.sg/#organization" },
  "author": { "@type": "Organization", "name": "Chambers and Partners" },
  "publisher": { "@type": "Organization", "name": "Chambers Global" },
  "datePublished": "2024",
  "reviewBody": "Can always find the key issues and present solutions."
}`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Beyond Horizons | Singapore Cross-border Legal Counsel" },
      {
        name: "description",
        content:
          "Beyond Horizons by Bethel Chambers LLC: Singapore-based cross-border legal counsel with AI efficiency, aviation and energy expertise; Chambers Global-ranked.",
      },
      { name: "author", content: "Beyond Horizons, Bethel Chambers LLC" },
      {
        name: "google-site-verification",
        content: "zwuv3WnbZ5r6n8GajT7DKgDmWPiN3TqmoXN2eb82qTo",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Beyond Horizons" },
      { property: "og:url", content: "https://beyondhorizons.sg/" },
      {
        property: "og:title",
        content: "Beyond Horizons | Singapore Cross-border Legal Counsel",
      },
      {
        property: "og:description",
        content:
          "Beyond Horizons by Bethel Chambers LLC: Singapore-based cross-border legal counsel with AI efficiency, aviation and energy expertise; Chambers Global-ranked.",
      },
      { property: "og:image", content: "https://beyondhorizons.sg/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Beyond Horizons | Singapore Cross-border Legal Counsel",
      },
      {
        name: "twitter:description",
        content:
          "Beyond Horizons by Bethel Chambers LLC: Singapore-based cross-border legal counsel with AI efficiency, aviation and energy expertise; Chambers Global-ranked.",
      },
      { name: "twitter:image", content: "https://beyondhorizons.sg/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/lovable-uploads/3e884989-0557-4f58-9a41-44950479350e.png",
      },
      { rel: "canonical", href: "https://beyondhorizons.sg/" },
    ],
    scripts: [
      { type: "application/ld+json", children: ORGANIZATION_JSONLD },
      { type: "application/ld+json", children: WEBSITE_JSONLD },
      { type: "application/ld+json", children: FOUNDER_JSONLD },
      { type: "application/ld+json", children: ASSOCIATE_JSONLD },
      { type: "application/ld+json", children: REVIEW_1_JSONLD },
      { type: "application/ld+json", children: REVIEW_2_JSONLD },
      { type: "application/ld+json", children: REVIEW_3_JSONLD },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <AnalyticsTracker />
            <Outlet />
            <WhatsAppFab />
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-2xl font-serif">This page didn't load</h1>
        <p className="text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a
            className="px-4 py-2 rounded-md border border-border bg-card text-foreground"
            href="/"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
