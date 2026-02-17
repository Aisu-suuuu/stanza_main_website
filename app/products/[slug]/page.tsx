import { notFound } from 'next/navigation'
import { getProductBySlug, getProducts } from '@/lib/api/products'
import { getFallbackProduct, getFallbackProductSlugs, fallbackProducts } from '@/lib/fallback-products'
import { stripHtml } from '@/lib/wordpress'
import type { Metadata } from 'next'
import ProductDetailClient from './ProductDetailClient'

export async function generateStaticParams() {
  const wpProducts = await getProducts()
  const wpSlugs = wpProducts.map((p) => p.slug)
  const fbSlugs = getFallbackProductSlugs()
  const allSlugs = Array.from(new Set([...wpSlugs, ...fbSlugs]))
  return allSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (product) {
    return {
      title: `${stripHtml(product.title.rendered)} | Stanzasoft Products`,
      description: product.acf.description,
    }
  }
  const fallback = getFallbackProduct(slug)
  if (fallback) {
    return {
      title: `${fallback.title} | Stanzasoft Products`,
      description: fallback.description,
    }
  }
  return { title: 'Product Not Found | Stanzasoft' }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const product = await getProductBySlug(slug)
  if (product) {
    const allProducts = await getProducts()
    const otherProducts = allProducts
      .filter((p) => p.slug !== slug)
      .slice(0, 3)
      .map((p) => ({
        slug: p.slug,
        title: stripHtml(p.title.rendered),
        description: p.acf.description,
      }))

    return (
      <ProductDetailClient
        product={{
          title: stripHtml(product.title.rendered),
          slug: product.slug,
          description: product.acf.description,
          overview: product.acf.description_2 || product.acf.description,
          features: product.acf.features ? product.acf.features.split('\n').filter(Boolean) : [],
          highlights: [],
          gradient: product.acf.gradient || 'from-purple-500 to-indigo-600',
        }}
        otherProducts={otherProducts}
      />
    )
  }

  const fallback = getFallbackProduct(slug)
  if (!fallback) {
    notFound()
  }

  const otherProducts = fallbackProducts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p) => ({ slug: p.slug, title: p.title, description: p.description }))

  return (
    <ProductDetailClient
      product={fallback}
      otherProducts={otherProducts}
    />
  )
}
