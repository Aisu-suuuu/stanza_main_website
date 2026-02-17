import { notFound } from 'next/navigation'
import { getSolutionBySlug, getSolutions } from '@/lib/api/solutions'
import { getFallbackSolution, getFallbackSolutionSlugs, fallbackSolutions } from '@/lib/fallback-solutions'
import { stripHtml } from '@/lib/wordpress'
import type { Metadata } from 'next'
import SolutionDetailClient from './SolutionDetailClient'

export async function generateStaticParams() {
  const wpSolutions = await getSolutions()
  const wpSlugs = wpSolutions.map((s) => s.slug)
  const fbSlugs = getFallbackSolutionSlugs()
  const allSlugs = Array.from(new Set([...wpSlugs, ...fbSlugs]))
  return allSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const solution = await getSolutionBySlug(slug)
  if (solution) {
    return {
      title: `${stripHtml(solution.title.rendered)} | Stanzasoft Solutions`,
      description: solution.acf.description,
    }
  }
  const fallback = getFallbackSolution(slug)
  if (fallback) {
    return {
      title: `${fallback.title} | Stanzasoft Solutions`,
      description: fallback.description,
    }
  }
  return { title: 'Solution Not Found | Stanzasoft' }
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const solution = await getSolutionBySlug(slug)
  if (solution) {
    const allSolutions = await getSolutions()
    const otherSolutions = allSolutions
      .filter((s) => s.slug !== slug)
      .slice(0, 3)
      .map((s) => ({
        slug: s.slug,
        title: stripHtml(s.title.rendered),
        description: s.acf.description,
      }))

    return (
      <SolutionDetailClient
        solution={{
          title: stripHtml(solution.title.rendered),
          slug: solution.slug,
          description: solution.acf.description,
          overview: solution.acf.description,
          features: solution.acf.features ? solution.acf.features.split('\n').filter(Boolean) : [],
          approach: [],
          iconName: solution.acf.icon_name || 'Rocket',
        }}
        otherSolutions={otherSolutions}
      />
    )
  }

  const fallback = getFallbackSolution(slug)
  if (!fallback) {
    notFound()
  }

  const otherSolutions = fallbackSolutions
    .filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({ slug: s.slug, title: s.title, description: s.description }))

  return (
    <SolutionDetailClient
      solution={fallback}
      otherSolutions={otherSolutions}
    />
  )
}
