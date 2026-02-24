'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      autoRaf: true,
    })
    lenisRef.current = lenis

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return null
}
