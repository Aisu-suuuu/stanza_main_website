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

export async function getProductBySlug(slug: string): Promise<WPProduct | null> {
  const products = await wpFetch<WPProduct[]>(
    `/product?slug=${slug}&_fields=id,title,slug,acf`,
    { revalidate: 3600, tags: [`product-${slug}`] }
  )
  return products?.[0] || null
}
