import { getPageBySlug } from '@/lib/api/pages'
import { getOfficeLocations } from '@/lib/api/locations'
import type { ContactPageFields } from '@/types/wordpress'
import { decodeHtmlEntities } from '@/lib/wordpress'
import ContactPageClient from './ContactPageClient'

export default async function ContactPage() {
  const [pageData, officeLocations] = await Promise.all([
    getPageBySlug<ContactPageFields>('contact'),
    getOfficeLocations(),
  ])

  const locationData = officeLocations.map((l) => ({
    title: decodeHtmlEntities(l.title.rendered),
    country: l.acf.country || '',
    address: l.acf.address || '',
    timezone: l.acf.timezone || '',
  }))

  return (
    <ContactPageClient
      pageData={pageData ?? undefined}
      locations={locationData.length > 0 ? locationData : undefined}
    />
  )
}
