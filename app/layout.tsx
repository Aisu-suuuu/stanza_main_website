import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Stanzasoft - We think, you grow',
  description: 'Stanzasoft is a team of builders, designers, and talent experts. We help companies design, develop, and hire – all in one place.',
  keywords: ['AI solutions', 'software development', 'Salesforce', 'enterprise solutions', 'digital transformation'],
  authors: [{ name: 'Stanzasoft' }],
  openGraph: {
    title: 'Stanzasoft - We think, you grow',
    description: 'AI Solutions That Take Your Business to the Next Level',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
