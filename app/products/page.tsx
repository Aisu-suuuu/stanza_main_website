import { getPageBySlug } from '@/lib/api/pages'
import type { ProductsPageFields } from '@/types/wordpress'
import ProductsPageClient from './ProductsPageClient'

export default async function ProductsPage() {
  const pageData = await getPageBySlug<ProductsPageFields>('products')

  return <ProductsPageClient pageData={pageData ?? undefined} />
}
