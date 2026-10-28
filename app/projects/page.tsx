import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ExternalLink, Rocket, ShieldCheck } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { projects } from '@/lib/site-data'

const featured = projects.filter((project) => ['sammena', 'jaslyn-net'].includes(project.slug))

export default function Projects() {
  return (
    <PageFrame eyebrow="Altavox Launchpad" title="Launch, observe, and grow the systems we build." intro="A focused home for Altavox products in production. Other initiatives remain in the portfolio while they move through discovery and delivery.">
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 rounded-2xl border border-[#ead9ad] bg-[#fffaf0] p-6 sm:flex-row sm:items-center sm:p-8">
          <div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a96b00]"><Rocket className="size-4" /> Launchpad</div><h2 className="mt-3 text-2xl font-extrabold text-[#162238]">Two live systems. One clear operating view.</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">Screenshots keep this portfolio fast and honest; use the live links to open the current deployment.</p></div>
          <div className="flex shrink-0 flex-wrap gap-3"><Link href="/deployments" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f3a923] px-5 py-3 text-sm font-bold text-[#162238] hover:bg-[#e59a15]">Open deployment desk <ArrowUpRight className="size-4" /></Link><Link href="https://github.com/yurian51" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#162238]/15 bg-white px-5 py-3 text-sm font-bold text-[#162238] hover:border-[#e7b44e]">GitHub profile <ExternalLink className="size-4" /></Link></div>
        </div>
        <div className="grid gap-7 lg:grid-cols-2">
          {featured.map((project, index) => (
            <article key={project.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#e7b44e] hover:shadow-xl">
              <div className={`relative aspect-[16/9] overflow-hidden ${project.slug === 'sammena' ? 'bg-[#17365d]' : 'bg-[#e8f2ff]'}`}><Image src={`/projects/${project.slug}-live.png`} alt={`${project.name} landing page screenshot`} fill className="object-cover object-top" sizes="(min-width: 1024px) 50vw, 100vw" /><div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#162238] shadow-sm"><span className="size-2 rounded-full bg-emerald-500" /> Landing page</div></div>
              <div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a96b00]">0{index + 1} · {project.category}</p><h2 className="mt-2 text-2xl font-extrabold text-[#162238]">{project.name}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f8fafc] px-3 py-1.5 text-xs font-medium text-slate-600">{tag}</span>)}</div><div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5"><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700"><ShieldCheck className="size-4" /> Hosted by Altavox</span><div className="flex gap-4"><Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-[#162238]">Details <ArrowUpRight className="size-4" /></Link><Link href={project.url!} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-[#a96b00]">Open live <ExternalLink className="size-4" /></Link></div></div></div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
