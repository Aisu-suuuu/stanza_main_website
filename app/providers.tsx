'use client'

import { ThemeProvider } from 'next-themes'
import SmoothScroll from '@/components/SmoothScroll'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SmoothScroll />
      {children}
    </ThemeProvider>
  )
}
