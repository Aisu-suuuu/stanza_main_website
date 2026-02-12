import { getPageBySlug } from '@/lib/api/pages'
import { getValueProps } from '@/lib/api/values'
import { getTeamDepartments } from '@/lib/api/team'
import type { AboutPageFields } from '@/types/wordpress'
import { decodeHtmlEntities } from '@/lib/wordpress'
import AboutPageClient from './AboutPageClient'

export default async function AboutPage() {
  const [pageData, valueProps, departments] = await Promise.all([
    getPageBySlug<AboutPageFields>('about'),
    getValueProps(),
    getTeamDepartments(),
  ])

  const valuesData = valueProps.map((v) => ({
    title: decodeHtmlEntities(v.title.rendered),
    description: v.acf.description || '',
    iconName: v.acf.icon_name,
  }))

  const deptData = departments.map((d) => ({
    title: decodeHtmlEntities(d.title.rendered),
    description: d.acf.description || '',
  }))

  return (
    <AboutPageClient
      pageData={pageData ?? undefined}
      values={valuesData.length > 0 ? valuesData : undefined}
      departments={deptData.length > 0 ? deptData : undefined}
    />
  )
}
