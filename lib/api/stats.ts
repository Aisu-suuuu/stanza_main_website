import { wpFetch } from '@/lib/wordpress'
import type { WPStat } from '@/types/wordpress'

export async function getStats(): Promise<WPStat[]> {
  const stats = await wpFetch<WPStat[]>(
    '/stat?per_page=100&_fields=id,title,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['stats'] }
  )
  if (!stats) return []
  return stats.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
