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
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9a8652313baf6a40b2c0a95dae45852c2566ba68ecc48f7e6919edb995c45d6f-g8RU0YUO5vv9yk01u705USST2XSTvs.png',
        type: 'image/png',
      },
    ],
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
