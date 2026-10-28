'use client'

import Link from 'next/link'
import { ArrowUpRight, ChevronDown, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'

const nav = [['Services','/services'],['Solutions','/projects'],['Projects','/projects'],['Community','/insights'],['About us','/about'],['Contact','/contact']]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <>
    <div className="bg-[#f3a923] px-4 py-2 text-center text-xs font-semibold text-[#191919]">Build smarter systems with Altavox Tech. <Link href="/start-project" className="underline underline-offset-2">Talk to an engineer</Link></div>
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-[#162238]" onClick={() => setOpen(false)}><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9a8652313baf6a40b2c0a95dae45852c2566ba68ecc48f7e6919edb995c45d6f-g8RU0YUO5vv9yk01u705USST2XSTvs.png" alt="Altavox Tech lion mark" className="size-10 rounded-lg object-cover" /><span className="whitespace-nowrap text-base font-extrabold tracking-[0.12em]">ALTAVOX<span className="text-[#e59a15]"> TECH</span></span></Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">{nav.map(([label, href]) => <Link key={href} href={href} className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-[#e59a15]">{label}{['Services','Solutions'].includes(label) && <ChevronDown className="size-3.5" />}</Link>)}</nav>
        <div className="hidden items-center gap-3 lg:flex"><button aria-label="Search" className="rounded-full p-2 text-slate-500 hover:bg-slate-100"><Search className="size-5" /></button><Link href="/start-project" className="inline-flex items-center gap-2 rounded-md bg-[#162238] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e59a15]">Start a project <ArrowUpRight className="size-4" /></Link></div>
        <button className="rounded-md p-2 text-[#162238] lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-navigation" className="flex flex-col gap-5 border-t border-slate-200 bg-white px-5 py-6 lg:hidden" aria-label="Mobile navigation">{nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="text-base font-medium text-slate-700">{label}</Link>)}<Link href="/start-project" onClick={() => setOpen(false)} className="w-fit rounded-md bg-[#162238] px-5 py-3 text-sm font-semibold text-white">Start a project</Link></nav>}
    </header>
  </>
}

export function SiteFooter() { return <footer className="border-t border-slate-200 bg-[#162238] text-slate-300"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"><div className="sm:col-span-2 lg:col-span-1"><div className="mb-5 flex items-center gap-3 text-white"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9a8652313baf6a40b2c0a95dae45852c2566ba68ecc48f7e6919edb995c45d6f-g8RU0YUO5vv9yk01u705USST2XSTvs.png" alt="Altavox Tech lion mark" className="size-9 rounded object-cover" /><span className="text-sm font-extrabold tracking-[0.14em]">ALTAVOX TECH</span></div><p className="max-w-xs text-sm leading-7">Software engineering and connected systems for organizations solving real operational problems.</p></div><FooterCol title="Company" links={nav.slice(0,3)} /><FooterCol title="Resources" links={[["Community","/insights"],["Contact","/contact"],["Privacy","/privacy"]]} /><FooterCol title="Projects" links={[["Sammena School","/projects/sammena"],["Jaslyn Net","/projects/jaslyn-net"],["NetBill-NOC","/projects/netbill-noc"]]} /></div><div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 Altavox Tech. All rights reserved.</span><span>Built for clarity. Engineered for reality.</span></div></footer> }
function FooterCol({title, links}:{title:string,links:string[][]}) { return <div><h3 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white">{title}</h3><div className="flex flex-col gap-3">{links.map(([label,href])=><Link key={href} href={href} className="text-sm transition hover:text-[#f3a923]">{label}</Link>)}</div></div> }

export function PageFrame({children, eyebrow, title, intro}:{children:React.ReactNode,eyebrow?:string,title?:string,intro?:string}) { return <><SiteHeader/><main className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#162238]">{title && <section className="border-b border-slate-200 bg-white px-5 py-16 lg:px-8 lg:py-20"><div className="mx-auto max-w-7xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#db9412]">{eyebrow}</p><h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-[#162238] sm:text-6xl">{title}</h1>{intro && <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{intro}</p>}</div></section>}{children}</main><SiteFooter/></> }
