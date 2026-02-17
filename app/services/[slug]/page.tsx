import { notFound } from 'next/navigation'
import { getServiceBySlug, getServices } from '@/lib/api/services'
import { getFallbackService, getFallbackServiceSlugs, fallbackServices } from '@/lib/fallback-services'
import { stripHtml } from '@/lib/wordpress'
import type { Metadata } from 'next'
import ServiceDetailClient from './ServiceDetailClient'

export async function generateStaticParams() {
  const wpServices = await getServices()
  const wpSlugs = wpServices.map((s) => s.slug)
  const fbSlugs = getFallbackServiceSlugs()
  const allSlugs = Array.from(new Set([...wpSlugs, ...fbSlugs]))
  return allSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (service) {
    return {
      title: `${stripHtml(service.title.rendered)} | Stanzasoft Services`,
      description: service.acf.description,
    }
  }
  const fallback = getFallbackService(slug)
  if (fallback) {
    return {
      title: `${fallback.title} | Stanzasoft Services`,
      description: fallback.description,
    }
  }
  return { title: 'Service Not Found | Stanzasoft' }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const service = await getServiceBySlug(slug)
  if (service) {
    const allServices = await getServices()
    const otherServices = allServices
      .filter((s) => s.slug !== slug)
      .slice(0, 3)
      .map((s) => ({
        slug: s.slug,
        title: stripHtml(s.title.rendered),
        description: s.acf.description,
      }))

    return (
      <ServiceDetailClient
        service={{
          title: stripHtml(service.title.rendered),
          slug: service.slug,
          description: service.acf.description,
          overview: service.acf.description,
          features: service.acf.bullet_points ? service.acf.bullet_points.split('\n').filter(Boolean) : [],
          useCases: [],
          iconName: service.acf.icon_name || 'Layers',
        }}
        otherServices={otherServices}
      />
    )
  }

  const fallback = getFallbackService(slug)
  if (!fallback) {
    notFound()
  }

  const otherServices = fallbackServices
    .filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({ slug: s.slug, title: s.title, description: s.description }))

  return (
    <ServiceDetailClient
      service={fallback}
      otherServices={otherServices}
    />
  )
}
