import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/admin', '/private', '/.well-known'],
    },
    sitemap: 'https://dutchtaxitransfers.nl/sitemap.xml',
    host: 'https://dutchtaxitransfers.nl',
  }
}
