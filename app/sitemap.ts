import type { MetadataRoute } from 'next'

const siteUrl = 'https://altavox.space'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    'about',
    'services',
    'projects',
    'case-studies',
    'technology',
    'insights',
    'courses',
    'store',
    'contact',
    'start-project',
    'privacy',
    'terms',
  ]

  return routes.map((route) => ({
    url: route ? `${siteUrl}/${route}` : siteUrl,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : ['services', 'projects', 'courses', 'store'].includes(route) ? 0.8 : 0.6,
  }))
}
