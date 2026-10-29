import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Altavox Tech — Software Systems Engineering & IT Operations Platform',
    template: '%s | Altavox Tech',
  },
  description: 'Technology company focused on software engineering, digital product development, ISP billing, infrastructure, and operational clarity.',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/altavox-favicon.svg', type: 'image/svg+xml' },
      { url: '/altavox-favicon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
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
