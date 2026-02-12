import { getPageBySlug } from '@/lib/api/pages'
import type { SolutionsPageFields } from '@/types/wordpress'
import SolutionsPageClient from './SolutionsPageClient'

export default async function SolutionsPage() {
  const pageData = await getPageBySlug<SolutionsPageFields>('solutions')

  return <SolutionsPageClient pageData={pageData ?? undefined} />
}
