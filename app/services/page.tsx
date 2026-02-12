import { getPageBySlug } from '@/lib/api/pages'
import { getServices } from '@/lib/api/services'
import type { ServicesPageFields } from '@/types/wordpress'
import { parseNewlineList, decodeHtmlEntities } from '@/lib/wordpress'
import ServicesPageClient from './ServicesPageClient'

export default async function ServicesPage() {
  const [pageData, services] = await Promise.all([
    getPageBySlug<ServicesPageFields>('services'),
    getServices(),
  ])

  const serviceItems = services.map((s) => ({
    title: decodeHtmlEntities(s.title.rendered),
    description: s.acf.description || '',
    iconName: s.acf.icon_name,
    href: s.acf.href || '/contact',
    bulletPoints: parseNewlineList(s.acf.bullet_points),
  }))

  return (
    <ServicesPageClient
      pageData={pageData ?? undefined}
      services={serviceItems.length > 0 ? serviceItems : undefined}
    />
  )
}
