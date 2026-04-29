import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rinabelle Fashion | Mode mit Persönlichkeit',
  description: 'Entdecken Sie stilvolle Damenmode in unserer Boutique in Lauda-Königshofen. Individuelle Beratung, sorgfältig ausgewählte Stücke und eine gemütliche Atmosphäre erwarten Sie.',
  keywords: ['Boutique', 'Damenmode', 'Lauda-Königshofen', 'Mode', 'Fashion', 'Rinabelle'],
  authors: [{ name: 'Rinabelle Fashion' }],
  openGraph: {
    title: 'Rinabelle Fashion | Mode mit Persönlichkeit',
    description: 'Stilvolle Damenmode mit persönlicher Beratung in Lauda-Königshofen',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#E8AFC1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${lato.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
