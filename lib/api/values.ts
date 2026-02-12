import { wpFetch } from '@/lib/wordpress'
import type { WPValueProp } from '@/types/wordpress'

export async function getValueProps(): Promise<WPValueProp[]> {
  const values = await wpFetch<WPValueProp[]>(
    '/value_prop?per_page=100&_fields=id,title,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['values'] }
  )
  if (!values) return []
  return values.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
