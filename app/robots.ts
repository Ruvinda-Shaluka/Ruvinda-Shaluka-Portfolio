import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://personal-portfolio-next-js-tixh.vercel.app/sitemap.xml',
  }
}
