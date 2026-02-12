import { getPageBySlug } from '@/lib/api/pages'
import type { IndustriesPageFields } from '@/types/wordpress'
import IndustriesPageClient from './IndustriesPageClient'

export default async function IndustriesPage() {
  const pageData = await getPageBySlug<IndustriesPageFields>('industries')

  return <IndustriesPageClient pageData={pageData ?? undefined} />
}
