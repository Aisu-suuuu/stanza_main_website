import { wpFetch } from '@/lib/wordpress'
import type { WPClientLogo } from '@/types/wordpress'

export async function getClientLogos(): Promise<WPClientLogo[]> {
  const logos = await wpFetch<WPClientLogo[]>(
    '/client_logo?per_page=100&_fields=id,title,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['client-logos'] }
  )
  if (!logos) return []
  return logos.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
