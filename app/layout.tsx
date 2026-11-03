import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

const siteUrl = 'https://kanishkprasad.site'

export const metadataBase = new URL(siteUrl)

export const metadata: Metadata = {
  title: {
    default: 'Kanishk Prasad | Python Developer & AI Enthusiast',
    template: '%s | Kanishk Prasad',
  },
  description: 'Backend developer building backend APIs, data pipelines, and production-ready AI systems with Python, FastAPI, and modern AI tooling. Open to full-time roles.',
  keywords: ['Python Developer', 'Backend Developer', 'AI Engineer', 'FastAPI', 'AI Systems', 'PostgreSQL', 'Redis', 'MongoDB', 'Docker', 'AWS'],
  authors: [{ name: 'Kanishk Prasad', url: siteUrl }],
  creator: 'Kanishk Prasad',
  publisher: 'Kanishk Prasad',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Kanishk Prasad | Portfolio',
    title: 'Kanishk Prasad | Python Developer & AI Enthusiast',
    description: 'Backend developer building backend APIs, data pipelines, and production-ready AI systems.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Kanishk Prasad | Python Developer & AI Enthusiast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanishk Prasad | Python Developer & AI Enthusiast',
    description: 'Backend developer building backend APIs, data pipelines, and production-ready AI systems.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@KanishkPra65580',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon-dark-32x32.png',
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAFAFA',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Geist:wght@300..900&family=Geist+Mono:wght@300..900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300..900&family=Geist+Mono:wght@300..900&display=swap" media="print" onLoad="this.media='all'" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kanishk Prasad',
              url: siteUrl,
              image: `${siteUrl}/my_pic.jpg`,
              sameAs: [
                'https://github.com/Kanishkp2906',
                'https://x.com/KanishkPra65580',
                'https://linkedin.com/in/kanishk-prasad-595b65312',
              ],
              jobTitle: 'Python Developer & AI Enthusiast',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance / Open to Full-time',
              },
              knowsAbout: [
                'Python',
                'FastAPI',
                'PostgreSQL',
                'Redis',
                'MongoDB',
                'LangChain',
                'RAG',
                'Docker',
                'AWS',
                'System Design',
                'API Architecture',
                'Machine Learning',
              ],
              description: 'Backend developer building backend APIs, data pipelines, and production-ready AI systems.',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}