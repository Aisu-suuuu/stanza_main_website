import { wpFetch } from '@/lib/wordpress'
import type { WPProduct } from '@/types/wordpress'

export async function getProducts(): Promise<WPProduct[]> {
  const products = await wpFetch<WPProduct[]>(
    '/product?per_page=100&_fields=id,title,slug,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['products'] }
  )
  if (!products) return []
  return products.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
