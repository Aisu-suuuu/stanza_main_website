import { wpFetch } from '@/lib/wordpress'
import type { WPService } from '@/types/wordpress'

export async function getServices(): Promise<WPService[]> {
  const services = await wpFetch<WPService[]>(
    '/service?per_page=100&_fields=id,title,slug,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['services'] }
  )
  if (!services) return []
  return services.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
