import { getPageBySlug } from '@/lib/api/pages'
import { getBlogPosts } from '@/lib/api/blog'
import type { BlogPageFields } from '@/types/wordpress'
import { stripHtml } from '@/lib/wordpress'
import BlogPageClient from './BlogPageClient'

export default async function BlogPage() {
  const [pageData, wpPosts] = await Promise.all([
    getPageBySlug<BlogPageFields>('blog'),
    getBlogPosts(),
  ])

  const postData = wpPosts.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: stripHtml(p.title.rendered),
    excerpt: stripHtml(p.excerpt.rendered),
    category: p._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
    date: new Date(p.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    readTime: p.acf?.read_time || '5 min read',
    featured: p.acf?.featured || false,
    image: p._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&h=800&fit=crop&q=80',
  }))

  return (
    <BlogPageClient
      pageData={pageData ?? undefined}
      posts={postData.length > 0 ? postData : undefined}
    />
  )
}
