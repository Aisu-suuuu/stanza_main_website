import { getPageBySlug } from '@/lib/api/pages'
import { getCareerPositions, getCareerBenefits } from '@/lib/api/careers'
import type { CareersPageFields } from '@/types/wordpress'
import { decodeHtmlEntities } from '@/lib/wordpress'
import CareersPageClient from './CareersPageClient'

export default async function CareersPage() {
  const [pageData, wpPositions, wpBenefits] = await Promise.all([
    getPageBySlug<CareersPageFields>('careers'),
    getCareerPositions(),
    getCareerBenefits(),
  ])

  const positionData = wpPositions.map((p, i) => ({
    id: p.id || i + 1,
    title: decodeHtmlEntities(p.title.rendered),
    type: p.acf.type || 'Full-time',
    location: p.acf.location || 'Remote',
    department: p.acf.department || 'Engineering',
    description: p.acf.description || '',
  }))

  const benefitData = wpBenefits.map((b) => ({
    title: decodeHtmlEntities(b.title.rendered),
    description: b.acf.description || '',
    iconName: b.acf.icon_name,
  }))

  return (
    <CareersPageClient
      pageData={pageData ?? undefined}
      positions={positionData.length > 0 ? positionData : undefined}
      benefits={benefitData.length > 0 ? benefitData : undefined}
    />
  )
}
