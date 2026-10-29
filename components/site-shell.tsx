'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Search, X, Menu, Terminal, Layers, FolderKanban, ShieldCheck, BookOpen, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { projects, services } from '@/lib/site-data'
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()

  // Cmd+K / Ctrl+K shortcut listener
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [searchOpen])

  // Filtered search results
  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const filteredServices = services.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <div className="bg-[#162238] px-4 py-2 text-center text-xs font-medium text-slate-200 border-b border-white/10">
        <span>Systems engineering & operations software. </span>
        <Link href="/computer" className="text-[#f3a923] hover:underline underline-offset-4 font-semibold ml-1">
          Explore Altavox Computer Console →
        </Link>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Zone 1: Authentic Altavox Tech Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group" onClick={() => setMobileOpen(false)}>
            <Image
              src="/Black%20Ibex%20Horns%20Emblem.png"
              alt="Altavox Tech Capricorn emblem"
              width={64}
              height={64}
              className="h-11 w-11 shrink-0 object-contain transition group-hover:opacity-90"
              priority
            />
            <span className="text-base font-bold tracking-tight text-[#162238]">ALTAVOX <span className="text-[#e59a15]">TECH</span></span>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600" aria-label="Primary navigation">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href))
              return (
                <Link
                  key={href}
                  href={href}
                  className={`transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                    active
                      ? 'border-[#e59a15] text-[#162238] font-semibold'
                      : 'border-transparent hover:text-[#e59a15]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Zone 3: Actions (Search + CTA) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 hover:border-slate-300 hover:text-slate-800 transition"
              aria-label="Search Altavox"
            >
              <Search className="size-3.5" />
              <span>Search systems…</span>
              <kbd className="rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 border border-slate-200">⌘K</kbd>
            </button>
            <Link
              href="/start-project"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#162238] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#e59a15] whitespace-nowrap shrink-0"
            >
              Start a project <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
              aria-label="Search"
            >
              <Search className="size-5" />
            </button>
            <button
              type="button"
              className="rounded-lg p-2 text-[#162238] hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileOpen && (
          <nav className="flex flex-col gap-3 border-t border-slate-200 bg-white px-6 py-6 lg:hidden" aria-label="Mobile navigation">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-base font-medium transition ${
                  pathname === href ? 'text-[#e59a15] font-semibold' : 'text-slate-700 hover:text-[#162238]'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <Link
                href="/start-project"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#162238] px-5 py-3 text-sm font-semibold text-white"
              >
                Start a project <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Quick Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-20 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center border-b border-slate-200 px-4 py-3">
              <Search className="size-5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, services, or architecture..."
                className="ml-3 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4 space-y-4">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Projects</p>
                <div className="space-y-1">
                  {filteredProjects.length === 0 ? (
                    <p className="text-xs text-slate-500 py-1">No matching projects found.</p>
                  ) : (
                    filteredProjects.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between rounded-lg p-2 text-sm text-slate-800 hover:bg-slate-100 transition"
                      >
                        <div>
                          <p className="font-semibold">{p.name}</p>
                          <p className="text-xs text-slate-500">{p.category}</p>
                        </div>
                        <ArrowUpRight className="size-4 text-slate-400" />
                      </Link>
                    ))
                  )}
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Capabilities</p>
                <div className="space-y-1">
                  {filteredServices.slice(0, 4).map((s) => (
                    <Link
                      key={s}
                      href="/services"
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between rounded-lg p-2 text-sm text-slate-800 hover:bg-slate-100 transition"
                    >
                      <span>{s}</span>
                      <ArrowUpRight className="size-4 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Press <kbd className="font-mono bg-slate-100 px-1 rounded">ESC</kbd> to exit</span>
                <Link href="/computer" onClick={() => setSearchOpen(false)} className="text-[#a96b00] hover:underline">
                  Open Developer Desk →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#0c1626] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="mb-4 inline-block group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image
              src="/Black%20Ibex%20Horns%20Emblem.png"
              alt="Altavox Tech Capricorn emblem"
              width={64}
              height={64}
              className="h-11 w-11 object-contain transition group-hover:opacity-90"
            />
            <span className="ml-3 inline-flex items-center text-base font-bold tracking-tight text-white">ALTAVOX <span className="ml-1 text-[#f3a923]">TECH</span></span>
          </Link>
          <p className="max-w-xs text-sm leading-6 text-slate-400">
            Software engineering, ISP digital platforms, and connected systems built for operational clarity.
          </p>
          <div className="mt-6 flex flex-col gap-1 text-xs text-slate-400">
            <span className="text-white font-medium">Headquarters & Direct Desks</span>
            <span>Dar es Salaam, Tanzania</span>
            <span className="text-[#f26522] font-semibold">+255 750 227 073 / +255 708 227 073</span>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">Engineering</h3>
          <div className="flex flex-col gap-2.5 text-sm text-slate-400">
            <Link href="/services" className="hover:text-[#f3a923] transition">Custom Software</Link>
            <Link href="/services" className="hover:text-[#f3a923] transition">ISP Billing & Hotspot</Link>
            <Link href="/services" className="hover:text-[#f3a923] transition">Cloud Infrastructure</Link>
            <Link href="/technology" className="hover:text-[#f3a923] transition">Architecture & Stack</Link>
            <Link href="/computer" className="hover:text-[#f3a923] transition">Altavox Computer Console</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">Active Systems</h3>
          <div className="flex flex-col gap-2.5 text-sm text-slate-400">
            <Link href="/projects/sammena" className="hover:text-[#f3a923] transition">Sammena School SIMS</Link>
            <Link href="/projects/jaslyn-net" className="hover:text-[#f3a923] transition">Jaslyn Net Operations</Link>
            <Link href="/projects/netbill-noc" className="hover:text-[#f3a923] transition">NetBill-NOC Platform</Link>
            <Link href="/projects/nexora-cloud" className="hover:text-[#f3a923] transition">Nexora Cloud Runtime</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">Company & Contact</h3>
          <div className="flex flex-col gap-2.5 text-sm text-slate-400">
            <Link href="/about" className="hover:text-[#f3a923] transition">About Us</Link>
            <Link href="/insights" className="hover:text-[#f3a923] transition">Field Notes & Insights</Link>
            <Link href="/contact" className="hover:text-[#f3a923] transition">Contact Engineers</Link>
            <Link href="/privacy" className="hover:text-[#f3a923] transition">Privacy Notice</Link>
            <Link href="/terms" className="hover:text-[#f3a923] transition">Terms of Engagement</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>© {new Date().getFullYear()} Altavox Tech. All rights reserved.</span>
        <span className="font-mono text-[11px] text-slate-500">Built for clarity. Engineered for reality.</span>
      </div>
    </footer>
  )
}

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
