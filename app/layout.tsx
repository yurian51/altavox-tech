import type { Metadata, Viewport } from 'next'
import './globals.css'

const brandEmblem = '/capricorn_emblem_clean_black.svg'
const appIcon = '/capricorn_emblem_clean_black.svg'

export const metadata: Metadata = {
  metadataBase: new URL('https://altavox.space'),
  title: {
    default: 'Altavox Tech — Software Systems Engineering & IT Operations Platform',
    template: '%s | Altavox Tech',
  },
  description: 'Technology company focused on software engineering, digital product development, ISP billing, infrastructure, and operational clarity.',
  applicationName: 'Altavox Tech',
  generator: 'Next.js',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: brandEmblem, type: 'image/svg+xml', sizes: 'any' },
    ],
    shortcut: [appIcon],
    apple: [{ url: appIcon, type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Altavox Tech',
    title: 'Altavox Tech — Software Systems Engineering & IT Operations Platform',
    description: 'Software engineering, digital product development, ISP billing, infrastructure, and connected systems.',
    images: [{ url: brandEmblem, alt: 'Altavox Tech Capricorn brand emblem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altavox Tech',
    description: 'Software engineering, digital product development, ISP billing, infrastructure, and connected systems.',
    images: [brandEmblem],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#07294d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
