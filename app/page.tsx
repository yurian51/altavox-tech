import Link from 'next/link'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Blocks, Cable, Code2, Layers3, ShieldCheck } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { projects, services } from '@/lib/site-data'

const principles = [
  { number: '01', title: 'Understand the operation', text: 'Start with the real workflow, constraints, and people behind the problem.' },
  { number: '02', title: 'Design the system', text: 'Make the data, integrations, permissions, and failure paths explicit.' },
  { number: '03', title: 'Build for the long run', text: 'Keep the software understandable, maintainable, and ready to evolve.' },
]

const capabilities = [
  { icon: Code2, title: 'Product engineering', text: 'Web applications, APIs, and digital products shaped around real user needs.' },
  { icon: Cable, title: 'Connected systems', text: 'Integrations across networks, operational tools, data, and business workflows.' },
  { icon: ShieldCheck, title: 'Infrastructure & trust', text: 'Practical foundations for deployment, access control, reliability, and maintenance.' },
]

export default function Page() {
  return (
    <PageFrame>
      <section className="relative isolate overflow-hidden bg-[#101b2b] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-25"><div className="blueprint-grid absolute inset-0" /><div className="absolute -right-24 top-10 size-[28rem] rounded-full border border-[#f2a900]/30 sm:right-8 sm:size-[34rem]" /><div className="absolute -right-8 top-24 size-[20rem] rounded-full border border-white/10 sm:right-24 sm:size-[25rem]" /></div>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-28">
          <div className="relative z-10">
            <p className="mb-6 inline-flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[.22em] text-[#ffc247]"><span className="h-px w-8 bg-[#f2a900]" />Independent software & systems engineering</p>
            <h1 className="max-w-3xl text-[clamp(3rem,7vw,6.3rem)] font-semibold leading-[.98] tracking-[-.065em]">Build what keeps <span className="text-[#ffc247]">work moving.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">Altavox Tech creates software products and connected systems for the work behind education, connectivity, and business operations.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/solutions" className="inline-flex min-h-12 items-center gap-3 bg-[#f2a900] px-5 py-3 text-sm font-bold text-[#101b2b] transition hover:bg-[#ffd16b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffc247]">Explore solutions <ArrowUpRight className="size-4" /></Link><Link href="/start-project" className="inline-flex min-h-12 items-center gap-3 border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ffc247] hover:text-[#ffc247] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffc247]">Discuss a project <ArrowRight className="size-4" /></Link></div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 font-mono text-[10px] uppercase tracking-[.16em] text-slate-400 sm:text-xs"><span>Software</span><span className="text-[#f2a900]">/</span><span>Networks</span><span className="text-[#f2a900]">/</span><span>Operations</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.18em] text-slate-400"><span>System map / 001</span><span>Conceptual architecture</span></div>
            <div className="border border-white/15 bg-[#152338]/90 p-4 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#f2a900]" /><span className="font-mono text-xs uppercase tracking-[.16em] text-white">Altavox ecosystem</span></div><Blocks className="size-4 text-[#ffc247]" /></div>
              <div className="relative grid grid-cols-2 gap-3 py-6 sm:gap-4">
                <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" /><div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
                <SystemNode index="01" name="Products" detail="Web apps · APIs" /><SystemNode index="02" name="Operations" detail="Workflows · data" /><SystemNode index="03" name="Connectivity" detail="Networks · billing" /><SystemNode index="04" name="Infrastructure" detail="Deploy · maintain" />
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs"><span className="text-slate-400">Designed around the problem.</span><span className="inline-flex items-center gap-2 font-mono text-[#ffc247]"><span className="size-1.5 rounded-full bg-[#f2a900]" />ENGINEERED</span></div>
            </div>
            <p className="mt-3 text-right font-mono text-[10px] text-slate-500">Illustrative system map · not live telemetry</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#f2a900]" />
      </section>

      <section className="border-b border-[#d9d6ce] bg-[#f4f1e9]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-[.8fr_1.2fr] sm:items-center lg:px-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[.2em] text-[#8a5d00]">The Altavox point of view</p>
          <p className="max-w-3xl text-xl font-medium leading-8 tracking-tight text-[#172438] sm:text-2xl">Technology should make complex operations clearer, not add another layer of complexity.</p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] text-[#172438]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <SectionHeading eyebrow="Selected ecosystem" title="Different problems. Purpose-built systems." intro="Explore the products and initiatives being developed across the Altavox ecosystem. Status labels reflect the project catalogue, not a claim of production readiness." link="/projects" linkLabel="View all projects" />
          <div className="mt-10 divide-y divide-[#d9d6ce] border-y border-[#d9d6ce]">
            {projects.map((project, index) => (
              <article key={project.slug} className="grid gap-4 py-6 sm:grid-cols-[64px_1fr_auto] sm:items-start sm:gap-6 sm:py-8">
                <span className="font-mono text-sm text-[#8a5d00]">0{index + 1}</span>
                <div><div className="flex flex-wrap items-center gap-3"><h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.name}</h3><span className="border border-[#d9d6ce] px-2 py-1 font-mono text-[10px] uppercase tracking-[.12em] text-[#6b6b65]">{project.status}</span></div><p className="mt-2 max-w-2xl text-sm leading-7 text-[#5d6470]">{project.summary}</p><div className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="font-mono text-[10px] uppercase tracking-[.08em] text-[#8a5d00]">{tag}</span>)}</div></div>
                <Link href={`/projects/${project.slug}`} aria-label={`View ${project.name} details`} className="inline-flex size-10 items-center justify-center border border-[#d9d6ce] transition hover:border-[#172438] hover:bg-[#172438] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a5d00]"><ArrowUpRight className="size-4" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9d6ce] bg-white text-[#172438]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <SectionHeading eyebrow="What we do" title="Engineering that connects the pieces." intro="A focused set of capabilities for turning operational needs into useful, maintainable software." />
          <div className="mt-10 grid gap-0 border-y border-[#d9d6ce] md:grid-cols-3 md:divide-x md:divide-[#d9d6ce]">
            {capabilities.map((item, index) => <article key={item.title} className="py-7 md:px-6 md:first:pl-0 md:last:pr-0"><div className="flex items-center justify-between"><item.icon className="size-5 text-[#a36d00]" strokeWidth={1.7} /><span className="font-mono text-xs text-[#8a8c90]">0{index + 1}</span></div><h3 className="mt-7 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#5d6470]">{item.text}</p></article>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">{services.map(service => <span key={service} className="border border-[#d9d6ce] px-3 py-2 text-xs text-[#5d6470]">{service}</span>)}</div>
        </div>
      </section>

      <section className="bg-[#101b2b] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div><p className="font-mono text-[11px] uppercase tracking-[.2em] text-[#ffc247]">How we approach the work</p><h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Clear thinking. Useful software. No theatre.</h2></div>
          <div className="divide-y divide-white/15 border-y border-white/15">{principles.map(item => <div key={item.number} className="grid gap-3 py-5 sm:grid-cols-[52px_1fr] sm:gap-5"><span className="font-mono text-sm text-[#ffc247]">{item.number}</span><div><h3 className="font-semibold">{item.title}</h3><p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">{item.text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="bg-[#f2a900] text-[#101b2b]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-14 lg:px-8"><div><p className="font-mono text-[10px] font-bold uppercase tracking-[.2em]">Have a real operational problem?</p><h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">Let’s work out what the system needs to do.</h2></div><Link href="/start-project" className="inline-flex min-h-12 w-fit items-center gap-3 border border-[#101b2b]/30 px-5 py-3 text-sm font-bold transition hover:bg-[#101b2b] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101b2b]">Start a project <ArrowDownRight className="size-4" /></Link></div>
      </section>
    </PageFrame>
  )
}

function SystemNode({ index, name, detail }: { index: string; name: string; detail: string }) {
  return <div className="relative z-10 min-h-28 border border-white/15 bg-[#101b2b] p-3 sm:min-h-32 sm:p-4"><span className="font-mono text-[10px] text-[#ffc247]">{index} / NODE</span><h3 className="mt-4 text-sm font-semibold text-white sm:text-base">{name}</h3><p className="mt-1 text-[11px] leading-5 text-slate-400">{detail}</p></div>
}

function SectionHeading({ eyebrow, title, intro, link, linkLabel }: { eyebrow: string; title: string; intro?: string; link?: string; linkLabel?: string }) {
  return <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="font-mono text-[10px] font-semibold uppercase tracking-[.2em] text-[#8a5d00]">{eyebrow}</p><h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h2>{intro && <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5d6470]">{intro}</p>}</div>{link && <Link href={link} className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold hover:text-[#8a5d00]">{linkLabel} <ArrowRight className="size-4" /></Link>}</div>
}
