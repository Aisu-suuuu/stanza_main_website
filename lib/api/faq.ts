import { wpFetch } from '@/lib/wordpress'
import type { WPFaqItem } from '@/types/wordpress'

export async function getFaqItems(): Promise<WPFaqItem[]> {
  const items = await wpFetch<WPFaqItem[]>(
    '/faq_item?per_page=100&_fields=id,title,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['faq'] }
  )
  if (!items) return []
  return items.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
