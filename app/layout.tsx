import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Altavox Tech — Software & Systems Engineering',
    template: '%s | Altavox Tech',
  },
  description: 'Altavox Tech builds software products and connected systems for education, connectivity, and business operations.',
  generator: 'Next.js',
  icons: {
    icon: '/altavox-favicon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#101b2b',
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
