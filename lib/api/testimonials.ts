import { wpFetch } from '@/lib/wordpress'
import type { WPTestimonial } from '@/types/wordpress'

export async function getTestimonials(): Promise<WPTestimonial[]> {
  const testimonials = await wpFetch<WPTestimonial[]>(
    '/testimonial?per_page=100&_fields=id,title,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['testimonials'] }
  )
  if (!testimonials) return []
  return testimonials.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
