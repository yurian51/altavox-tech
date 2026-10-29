import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Altavox Tech — Technology Built to Solve Real Problems',
    template: '%s | Altavox Tech',
  },
  description: 'Altavox Tech designs and develops software platforms, digital experiences, and connected systems for real operational problems.',
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
  colorScheme: 'dark',
  themeColor: '#08121f',
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

