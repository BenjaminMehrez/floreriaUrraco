import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.
Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/send',
    },
    sitemap: 'https://www.floreriamadison.com.ar/sitemap.xml',
    
  }
}