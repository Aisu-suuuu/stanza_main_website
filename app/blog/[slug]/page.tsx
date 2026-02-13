import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getBlogSlugs, getBlogPosts } from '@/lib/api/blog'
import { getFallbackBlogPost, getFallbackBlogSlugs, fallbackBlogPosts } from '@/lib/fallback-blog'
import { stripHtml } from '@/lib/wordpress'
import type { Metadata } from 'next'
import BlogPostClient from './BlogPostClient'

export async function generateStaticParams() {
  const wpSlugs = await getBlogSlugs()
  const fbSlugs = getFallbackBlogSlugs()
  const allSlugs = Array.from(new Set([...wpSlugs, ...fbSlugs]))
  return allSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (post) {
    return {
      title: stripHtml(post.title.rendered),
      description: stripHtml(post.excerpt.rendered),
    }
  }
  const fallback = getFallbackBlogPost(slug)
  if (fallback) {
    return { title: fallback.title, description: fallback.excerpt }
  }
  return { title: 'Post Not Found' }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Try WordPress first
  const post = await getBlogPostBySlug(slug)

  if (post) {
    const allPosts = await getBlogPosts()
    const relatedPosts = allPosts
      .filter((p) => p.slug !== slug)
      .slice(0, 3)
      .map((p) => ({
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
        image: p._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&h=800&fit=crop&q=80',
      }))

    return (
      <BlogPostClient
        post={{
          title: stripHtml(post.title.rendered),
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
          date: new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
          readTime: post.acf?.read_time || '5 min read',
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&h=800&fit=crop&q=80',
          content: post.content.rendered,
        }}
        relatedPosts={relatedPosts}
      />
    )
  }

  // Fall back to hardcoded blog data
  const fallback = getFallbackBlogPost(slug)
  if (!fallback) {
    notFound()
  }

  // Build related posts from other fallback posts
  const relatedPosts = fallbackBlogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      date: p.date,
      readTime: p.readTime,
      image: p.image,
    }))

  return (
    <BlogPostClient
      post={{
        title: fallback.title,
        category: fallback.category,
        date: fallback.date,
        readTime: fallback.readTime,
        image: fallback.image,
        content: fallback.content,
      }}
      relatedPosts={relatedPosts}
    />
  )
}
