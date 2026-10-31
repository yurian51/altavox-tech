import type { Metadata, Viewport } from 'next'
import './globals.css'

const brandEmblem = '/capricorn_emblem_clean_black.svg'
const appIcon = '/favicon.svg'

export const metadata: Metadata = {
  metadataBase: new URL('https://altavox.space'),
  title: {
    default: 'Altavox Technologies | Software, AI & Digital Systems',
    template: '%s | Altavox Technologies',
  },
  description: 'Altavox Technologies builds practical software, AI-enabled workflows, fintech integrations, business platforms and digital infrastructure for organizations in Africa and beyond.',
  applicationName: 'Altavox Technologies',
  keywords: ['Altavox Technologies', 'software development', 'AI automation', 'fintech integrations', 'digital transformation', 'business systems', 'Tanzania'],
  category: 'technology',
  generator: 'Next.js',
  creator: 'Altavox Technologies',
  publisher: 'Altavox Technologies',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    shortcut: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Altavox Technologies',
    title: 'Altavox Technologies | Software, AI & Digital Systems',
    description: 'Software engineering, digital product development, ISP billing, infrastructure, and connected systems.',
    images: [{ url: brandEmblem, alt: 'Altavox Tech Capricorn brand emblem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altavox Technologies',
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
    <html lang="en-TZ">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
