import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'JanBask Training — Online IT Certification Courses & Live Training',
    template: '%s | JanBask Training',
  },
  description: 'Advance your career with JanBask Training: 100% Live Instructor-Led IT Certification courses in Salesforce, AWS Cloud, Data Science, Cyber Security, QA Automation, DevOps, and Gen AI.',
  generator: 'Next.js',
  icons: {
    icon: '/icon-light-32x32.png',
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

