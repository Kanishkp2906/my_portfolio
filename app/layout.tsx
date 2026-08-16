import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const accent = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '700', '900'], variable: '--font-accent' })

export const metadata: Metadata = {
  title: 'Kanishk — Python Developer & AI Engineer',
  description:
    'Python Developer & AI Engineer building high-performance backends and intelligent workflows with Python, FastAPI, and modern AI tooling.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg?v=3',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111111',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${geistSans.variable} ${geistMono.variable} ${accent.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
