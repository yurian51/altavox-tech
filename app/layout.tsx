import type { Metadata, Viewport } from 'next'
import './globals.css'

const brandEmblem = '/Black%20Ibex%20Horns%20Emblem.png'
const appIcon = '/Photorealistic%20Metallic%20Goat%20Emblem.png'

export const metadata: Metadata = {
  title: {
    default: 'Altavox Tech — Software Systems Engineering & IT Operations Platform',
    template: '%s | Altavox Tech',
  },
  description: 'Technology company focused on software engineering, digital product development, ISP billing, infrastructure, and operational clarity.',
  applicationName: 'Altavox Tech',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: appIcon, type: 'image/png' },
      { url: brandEmblem, type: 'image/png' },
    ],
    shortcut: [appIcon],
    apple: [{ url: appIcon, sizes: '180x180', type: 'image/png' }],
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
