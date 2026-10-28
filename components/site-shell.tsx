'use client'

import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const nav = [['Services','/services'],['Solutions','/solutions'],['Projects','/projects'],['Insights','/insights'],['About','/about'],['Contact','/contact']]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <>
    <div className="bg-[#f2a900] px-4 py-2.5 text-center text-[11px] font-semibold tracking-wide text-[#101b2b] sm:text-xs">Software and systems engineering for real operational work. <Link href="/start-project" className="ml-1 underline underline-offset-4 hover:no-underline">Start a conversation</Link></div>
    <header className="sticky top-0 z-50 border-b border-[#dedbd3] bg-[#fbfaf7]">
      <div className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-5 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 text-[#101b2b] sm:gap-3" onClick={() => setOpen(false)}>
          <img src="/altavox-favicon.svg" alt="Altavox Tech mark" className="size-9 shrink-0 object-contain sm:size-10" />
          <span className="whitespace-nowrap text-sm font-extrabold tracking-[.12em] sm:text-base">ALTAVOX<span className="text-[#a36d00]"> TECH</span></span>
        </Link>
        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary navigation">{nav.map(([label, href]) => <Link key={href + label} href={href} className="text-[13px] font-medium text-[#4e5662] transition hover:text-[#8a5d00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36d00]">{label}</Link>)}</nav>
        <div className="hidden lg:block"><Link href="/start-project" className="inline-flex min-h-10 items-center gap-2 bg-[#101b2b] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#a36d00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a36d00]">Start a project <ArrowUpRight className="size-4" /></Link></div>
        <button type="button" className="inline-flex size-10 shrink-0 items-center justify-center border border-[#dedbd3] text-[#101b2b] transition hover:border-[#a36d00] lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </div>
      {open && <nav id="mobile-navigation" className="border-t border-[#dedbd3] bg-[#fbfaf7] px-4 py-5 sm:px-5 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-7xl flex-col gap-1">{nav.map(([label, href]) => <Link key={href + label} href={href} onClick={() => setOpen(false)} className="flex min-h-11 items-center border-b border-[#dedbd3]/70 py-2 text-sm font-medium text-[#172438] hover:text-[#8a5d00]">{label}<ArrowUpRight className="ml-auto size-4 text-[#a36d00]" /></Link>)}<Link href="/start-project" onClick={() => setOpen(false)} className="mt-3 inline-flex min-h-11 w-fit items-center gap-2 bg-[#101b2b] px-4 py-3 text-sm font-semibold text-white">Start a project <ArrowUpRight className="size-4" /></Link></div></nav>}
    </header>
  </>
}

export function SiteFooter() {
  return <footer className="border-t border-white/10 bg-[#101b2b] text-slate-300">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12 lg:px-8 lg:py-16">
      <div><Link href="/" className="mb-5 inline-flex items-center gap-3 text-white"><img src="/altavox-favicon.svg" alt="" aria-hidden="true" className="size-9 object-contain" /><span className="text-sm font-extrabold tracking-[.14em]">ALTAVOX <span className="text-[#ffc247]">TECH</span></span></Link><p className="max-w-xs text-sm leading-7 text-slate-400">Software products and connected systems, designed around the work people need to get done.</p></div>
      <FooterCol title="Company" links={nav.slice(0, 3)} />
      <FooterCol title="Explore" links={[["Insights", "/insights"], ["About Altavox", "/about"], ["Contact", "/contact"]]} />
      <FooterCol title="Ecosystem" links={[["Sammena School", "/projects/sammena"], ["Jaslyn Net", "/projects/jaslyn-net"], ["NetBill-NOC", "/projects/netbill-noc"], ["All projects", "/projects"]]} />
    </div>
    <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-5 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© {new Date().getFullYear()} Altavox Tech.</span><span className="font-mono uppercase tracking-[.12em]">Built for clarity. Engineered for reality.</span></div>
  </footer>
}

function FooterCol({ title, links }: { title: string; links: string[][] }) {
  return <div><h3 className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[.2em] text-[#ffc247]">{title}</h3><div className="flex flex-col items-start gap-3">{links.map(([label, href]) => <Link key={href + label} href={href} className="text-sm text-slate-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc247]">{label}</Link>)}</div></div>
}

export function PageFrame({ children, eyebrow, title, intro }: { children: React.ReactNode; eyebrow?: string; title?: string; intro?: string }) {
  return <><SiteHeader /><main className="min-h-screen overflow-x-clip bg-[#fbfaf7] text-[#172438]">{title && <section className="border-b border-[#dedbd3] bg-[#f4f1e9] px-5 py-14 sm:py-16 lg:px-8 lg:py-20"><div className="mx-auto max-w-7xl"><p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[.2em] text-[#8a5d00]">{eyebrow}</p><h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>{intro && <p className="mt-5 max-w-2xl text-base leading-8 text-[#5d6470] sm:text-lg">{intro}</p>}</div></section>}{children}</main><SiteFooter /></>
}
