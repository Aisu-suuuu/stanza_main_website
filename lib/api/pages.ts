import { wpFetch } from '@/lib/wordpress'
import type { WPPage } from '@/types/wordpress'

export async function getPageBySlug<T = Record<string, unknown>>(
  slug: string,
  revalidate = 3600
): Promise<T | null> {
  const pages = await wpFetch<WPPage[]>(
    `/pages?slug=${slug}&_fields=id,slug,title,acf`,
    { revalidate, tags: [`page-${slug}`] }
  )

  if (!pages || pages.length === 0) return null
  return pages[0].acf as T
}
