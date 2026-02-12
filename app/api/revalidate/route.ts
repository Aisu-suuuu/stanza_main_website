import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Maps WordPress post types to frontend paths and cache tags
const POST_TYPE_MAP: Record<string, { paths: string[]; tags: string[] }> = {
  page: { paths: [], tags: [] }, // handled dynamically by slug
  post: { paths: ['/blog'], tags: ['blog-posts'] },
  service: { paths: ['/services', '/'], tags: ['services'] },
  solution: { paths: ['/solutions'], tags: ['solutions'] },
  product: { paths: ['/products', '/'], tags: ['products'] },
  industry: { paths: ['/industries'], tags: ['industries'] },
  faq_item: { paths: ['/'], tags: ['faq'] },
  stat: { paths: ['/'], tags: ['stats'] },
  step: { paths: ['/'], tags: ['steps'] },
  process_step: { paths: ['/'], tags: ['process-steps'] },
  testimonial: { paths: ['/products'], tags: ['testimonials'] },
  team_department: { paths: ['/about'], tags: ['team'] },
  value_prop: { paths: ['/about'], tags: ['values'] },
  career_position: { paths: ['/careers'], tags: ['career-positions'] },
  career_benefit: { paths: ['/careers'], tags: ['career-benefits'] },
  client_logo: { paths: ['/', '/about'], tags: ['client-logos'] },
  office_location: { paths: ['/contact'], tags: ['locations'] },
}

const PAGE_SLUG_MAP: Record<string, string> = {
  home: '/',
  about: '/about',
  services: '/services',
  solutions: '/solutions',
  products: '/products',
  industries: '/industries',
  blog: '/blog',
  contact: '/contact',
  careers: '/careers',
}

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidation-secret')

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { post_type, slug } = body

    const revalidated: string[] = []

    // Handle page type — revalidate the specific page path
    if (post_type === 'page' && slug) {
      const pagePath = PAGE_SLUG_MAP[slug]
      if (pagePath) {
        revalidatePath(pagePath)
        revalidateTag(`page-${slug}`)
        revalidated.push(pagePath)
      }
    }

    // Handle CPT types
    const mapping = POST_TYPE_MAP[post_type]
    if (mapping) {
      for (const path of mapping.paths) {
        revalidatePath(path)
        revalidated.push(path)
      }
      for (const tag of mapping.tags) {
        revalidateTag(tag)
      }
    }

    // Handle individual blog post revalidation
    if (post_type === 'post' && slug) {
      revalidatePath(`/blog/${slug}`)
      revalidateTag(`blog-${slug}`)
      revalidated.push(`/blog/${slug}`)
    }

    return NextResponse.json({
      revalidated: true,
      paths: revalidated,
      now: Date.now(),
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(error) },
      { status: 500 }
    )
  }
}
