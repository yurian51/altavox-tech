'use client'

import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const nav = [['About','/about'],['Services','/services'],['Projects','/projects'],['Case Studies','/case-studies'],['Computer','/computer'],['Launchpad','/launchpad'],['Insights','/insights'],['Contact','/contact']]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08121f]/85 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
      <Link href="/" className="flex items-center gap-3 text-white" onClick={() => setOpen(false)}>
        <img src="/altavox-favicon.svg" alt="Altavox Tech" className="size-9 rounded-lg" />
        <span className="whitespace-nowrap text-sm font-semibold tracking-[0.18em]">ALTAVOX<span className="text-cyan-300"> TECH</span></span>
      </Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{nav.map(([label, href]) => <Link key={href} href={href} className="text-sm text-slate-300 transition hover:text-cyan-300">{label}</Link>)}</nav>
      <Link href="/start-project" className="hidden items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-[#08121f] transition hover:bg-white lg:flex">Start a project <ArrowUpRight className="size-4" /></Link>
      <button className="rounded-md p-2 text-white transition hover:bg-white/10 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav id="mobile-navigation" className="flex flex-col gap-5 border-t border-white/10 bg-[#08121f] px-6 py-6 lg:hidden" aria-label="Mobile navigation">{nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="text-base text-slate-200">{label}</Link>)}<Link href="/start-project" onClick={() => setOpen(false)} className="w-fit rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-[#08121f]">Start a project</Link></nav>}
  </header>
}

export function SiteFooter() { return <footer className="border-t border-white/10 bg-[#06101b] text-slate-400"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"><div className="sm:col-span-2 lg:col-span-1"><div className="mb-5 flex items-center gap-3 text-white"><span className="grid size-8 place-items-center rounded bg-cyan-400 font-mono text-sm font-bold text-[#08121f]">A</span><span className="text-sm font-semibold tracking-[0.16em]">ALTAVOX TECH</span></div><p className="max-w-xs text-sm leading-7">Software engineering and systems development for organizations solving real operational problems.</p></div><FooterCol title="Company" links={nav.slice(0,5)} /><FooterCol title="Projects" links={[["Sammena School","/projects/sammena"],["Jaslyn Net","/projects/jaslyn-net"],["Nexora Cloud","/projects/nexora-cloud"],["NetBill-NOC","/projects/netbill-noc"]]} /><FooterCol title="Resources" links={[["Insights","/insights"],["Contact","/contact"],["Privacy","/privacy"],["Terms","/terms"]]} /></div><div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-6 py-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 Altavox Tech. All rights reserved.</span><span>Built for clarity. Engineered for reality.</span></div></footer> }
function FooterCol({title, links}:{title:string,links:string[][]}) { return <div><h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">{title}</h3><div className="flex flex-col gap-3">{links.map(([label,href])=><Link key={href} href={href} className="text-sm transition hover:text-cyan-300">{label}</Link>)}</div></div> }

export function PageFrame({children, eyebrow, title, intro}:{children:React.ReactNode,eyebrow?:string,title?:string,intro?:string}) { return <><SiteHeader/><main className="min-h-screen overflow-x-hidden bg-[#08121f] pt-20 text-slate-100">{title && <section className="border-b border-white/10 px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p><h1 className="max-w-4xl break-words text-4xl font-medium tracking-tight text-white sm:text-6xl">{title}</h1>{intro && <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">{intro}</p>}</div></section>}{children}</main><SiteFooter/></> }
