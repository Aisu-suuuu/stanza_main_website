import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import { AboutUs } from '@/components/sections/AboutUs'
import { Stats } from '@/components/sections/Stats'
import { Products } from '@/components/sections/Products'
import { AISolutions } from '@/components/sections/AISolutions'
import { Steps } from '@/components/sections/Steps'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Stats />
        <Products />
        <AISolutions />
        <Steps />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
