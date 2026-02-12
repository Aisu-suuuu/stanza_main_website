import { wpFetch } from '@/lib/wordpress'
import type { WPPost, WPCategory } from '@/types/wordpress'

export async function getBlogPosts(): Promise<WPPost[]> {
  const posts = await wpFetch<WPPost[]>(
    '/posts?per_page=100&_embed&_fields=id,date,slug,title,excerpt,featured_media,categories,acf,_embedded',
    { revalidate: 600, tags: ['blog-posts'] }
  )
  return posts || []
}

export async function getBlogPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await wpFetch<WPPost[]>(
    `/posts?slug=${slug}&_embed&_fields=id,date,slug,title,content,excerpt,featured_media,categories,acf,_embedded`,
    { revalidate: 3600, tags: [`blog-${slug}`] }
  )
  if (!posts || posts.length === 0) return null
  return posts[0]
}

export async function getBlogSlugs(): Promise<string[]> {
  const posts = await wpFetch<WPPost[]>(
    '/posts?per_page=100&_fields=slug',
    { revalidate: 600 }
  )
  if (!posts) return []
  return posts.map((p) => p.slug)
}

export async function getCategories(): Promise<WPCategory[]> {
  const categories = await wpFetch<WPCategory[]>(
    '/categories?per_page=100&_fields=id,name,slug,count',
    { revalidate: 3600, tags: ['categories'] }
  )
  return categories || []
}
