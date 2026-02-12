import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import { AboutUs } from '@/components/sections/AboutUs'
import { Stats } from '@/components/sections/Stats'
import { Products } from '@/components/sections/Products'
import { Steps } from '@/components/sections/Steps'
import { Process } from '@/components/sections/Process'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { getPageBySlug } from '@/lib/api/pages'
import { getStats } from '@/lib/api/stats'
import { getProducts } from '@/lib/api/products'
import { getSteps } from '@/lib/api/steps'
import { getProcessSteps } from '@/lib/api/process'
import { getFaqItems } from '@/lib/api/faq'
import { getClientLogos } from '@/lib/api/logos'
import type { HomePageFields } from '@/types/wordpress'
import { parseNewlineList, decodeHtmlEntities } from '@/lib/wordpress'

export default async function Home() {
  const [pageData, stats, products, steps, processSteps, faqItems, clientLogos] = await Promise.all([
    getPageBySlug<HomePageFields>('home'),
    getStats(),
    getProducts(),
    getSteps(),
    getProcessSteps(),
    getFaqItems(),
    getClientLogos(),
  ])

  const acf = pageData

  // Transform WP products to match component interface
  const productItems = products.map((p, i) => ({
    title: decodeHtmlEntities(p.title.rendered),
    description: [p.acf.description, p.acf.description_2].filter(Boolean) as string[],
    imageUrl: p.acf.product_image || 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60',
    imageOnLeft: i % 2 === 0,
  }))

  // Transform WP steps
  const stepItems = steps.map((s) => ({
    number: s.acf.number || '01',
    badge: s.acf.badge || '',
    title: decodeHtmlEntities(s.title.rendered),
    description: s.acf.description || '',
    tags: parseNewlineList(s.acf.tags),
    imageUrl: s.acf.step_image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
  }))

  // Transform WP process steps
  const processItems = processSteps.map((ps) => ({
    number: ps.acf.number || 1,
    title: decodeHtmlEntities(ps.title.rendered),
    description: ps.acf.description || '',
  }))

  // Transform WP stats
  const statItems = stats.map((s) => ({
    value: s.acf.value || 0,
    suffix: s.acf.suffix || '+',
    label: decodeHtmlEntities(s.title.rendered),
  }))

  // Transform WP FAQ items
  const faqItemsList = faqItems.map((f) => ({
    question: decodeHtmlEntities(f.title.rendered),
    answer: f.acf.answer || '',
  }))

  // Transform WP client logos
  const logoItems = clientLogos.map((l) => ({
    name: decodeHtmlEntities(l.title.rendered),
    logo: l.acf.logo || '/logos/default.svg',
  }))

  return (
    <>
      <Header />
      <main>
        <Hero
          headline={acf?.hero_headline}
          subheadline={acf?.hero_subheadline}
          ctaPrimaryText={acf?.hero_cta_primary_text}
          ctaPrimaryLink={acf?.hero_cta_primary_link}
          ctaSecondaryText={acf?.hero_cta_secondary_text}
          ctaSecondaryLink={acf?.hero_cta_secondary_link}
        />
        <AboutUs
          heading={acf?.about_heading}
          paragraph1={acf?.about_paragraph_1}
          paragraph2={acf?.about_paragraph_2}
          aboutImage={acf?.about_image}
          clientsTagline={acf?.about_clients_tagline}
          clients={logoItems.length > 0 ? logoItems : undefined}
        />
        <Stats stats={statItems.length > 0 ? statItems : undefined} />
        <Products
          heading={acf?.products_section_heading}
          subheading={acf?.products_section_subheading}
          products={productItems.length > 0 ? productItems : undefined}
        />
        <Steps
          badge={acf?.steps_section_badge}
          heading={acf?.steps_section_heading}
          subheading={acf?.steps_section_subheading}
          steps={stepItems.length > 0 ? stepItems : undefined}
        />
        <Process
          badge={acf?.process_section_badge}
          heading={acf?.process_section_heading}
          steps={processItems.length > 0 ? processItems : undefined}
        />
        <FAQ
          heading={acf?.faq_heading}
          subheading={acf?.faq_subheading}
          items={faqItemsList.length > 0 ? faqItemsList : undefined}
        />
        <CTA
          heading={acf?.cta_heading}
          subtext={acf?.cta_subtext}
          buttonText={acf?.cta_button_text}
          buttonLink={acf?.cta_button_link}
        />
      </main>
      <Footer />
    </>
  )
}
