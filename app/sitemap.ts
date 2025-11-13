import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://beyondhorizons.sg'
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/market-insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Dynamic expertise routes
  const expertiseIds = [
    'ma-cross-border',
    'tech-general-counsel',
    'commercial-contracts',
    'corporate-transactions',
    'regulatory-compliance',
    'ip-data-privacy',
    'startup-funding',
    'employment-labor',
    'arbitration-disputes',
    'financial-services',
    'business-legacies-apac',
    'family-business-governance',
    'cross-border-wealth-planning',
    'singapore-legacy-hub',
    'succession-planning-founders',
    'ip-business-legacy',
    'trusts-foundations-wealth',
    'crisis-proofing-legacy',
    'tech-legacy-planning',
    'esg-legacy-business',
  ]

  const expertiseRoutes = expertiseIds.map((id) => ({
    url: `${baseUrl}/expertise/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Dynamic why-choose-us routes
  const whyChooseUsIds = [
    'digital-first',
    'cost-efficiency',
    'global-expertise',
    'confidentiality',
  ]

  const whyChooseUsRoutes = whyChooseUsIds.map((id) => ({
    url: `${baseUrl}/why-choose-us/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...expertiseRoutes, ...whyChooseUsRoutes]
}

