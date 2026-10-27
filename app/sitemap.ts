import type { MetadataRoute } from 'next'
export default function sitemap():MetadataRoute.Sitemap{const routes=['','about','services','projects','case-studies','technology','insights','contact','start-project','privacy','terms'];return routes.map(route=>({url:`https://altavox.tech/${route}`,lastModified:new Date()}))}
