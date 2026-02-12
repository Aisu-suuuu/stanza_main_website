import { wpFetch } from '@/lib/wordpress'
import type { WPOfficeLocation } from '@/types/wordpress'

export async function getOfficeLocations(): Promise<WPOfficeLocation[]> {
  const locations = await wpFetch<WPOfficeLocation[]>(
    '/office_location?per_page=100&_fields=id,title,acf&orderby=date&order=asc',
    { revalidate: 86400, tags: ['locations'] }
  )
  if (!locations) return []
  return locations.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
