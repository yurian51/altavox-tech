'use client'

import { JanBaskHeader } from '@/components/janbask-header'
import { JanBaskFooter } from '@/components/janbask-footer'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Altavox Computer', href: '/computer' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  return <JanBaskHeader />
}

export function SiteFooter() {
  return <JanBaskFooter />
}

export function PageFrame({
  children,
  eyebrow,
  title,
  intro,
}: {
  children: React.ReactNode
  eyebrow?: string
  title?: string
  intro?: string
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <JanBaskHeader />
      <main className="flex-1 overflow-x-hidden pb-20">
        {title && (
          <section className="bg-gradient-to-b from-[#07294d] via-[#093563] to-[#051c36] text-white py-12 lg:py-16 border-b border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {eyebrow && (
                <span className="inline-block rounded-full bg-[#f26522] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white mb-3 shadow-xs">
                  {eyebrow}
                </span>
              )}
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                {title}
              </h1>
              {intro && (
                <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-200">
                  {intro}
                </p>
              )}
            </div>
          </section>
        )}
        {children}
      </main>
      <JanBaskFooter />
    </div>
  )
}
