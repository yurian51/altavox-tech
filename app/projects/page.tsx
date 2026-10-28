import Link from 'next/link'
import { ArrowUpRight, ExternalLink, Globe2 } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { projects } from '@/lib/site-data'

export default function Projects() {
  return (
    <PageFrame eyebrow="Portfolio & hosting" title="Distinct products. One engineering practice." intro="Every Altavox project stays visible in one place: what it is, where it runs, and how to open the live experience.">
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.slug} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#e7b44e] hover:shadow-xl hover:shadow-slate-200/60">
              <div className="relative h-52 overflow-hidden bg-[#162238]">
                {project.url ? <iframe src={project.url} title={`${project.name} live preview`} loading="lazy" className="h-full w-full border-0 bg-white" sandbox="allow-scripts allow-same-origin" /> : <div className="grid h-full place-items-center text-sm text-slate-400">Live container coming soon</div>}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#162238]"><span className="size-2 rounded-full bg-emerald-500" />{project.url ? 'Live container' : 'Planned'}</div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a96b00]">0{index + 1} · {project.category}</p><h2 className="mt-2 text-2xl font-extrabold text-[#162238]">{project.name}</h2></div><Globe2 className="mt-1 size-5 text-[#e59a15]" /></div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f8fafc] px-3 py-1.5 text-xs font-medium text-slate-600">{tag}</span>)}</div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5"><span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{project.status}</span><div className="flex gap-4"><Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-[#162238] hover:text-[#a96b00]">Details <ArrowUpRight className="size-4" /></Link>{project.url && <Link href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-[#a96b00]">Open live <ExternalLink className="size-4" /></Link>}</div></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
