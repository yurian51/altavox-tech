import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Users, Cpu, Compass } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'

const principles = [
  {
    num: '01',
    title: 'Understand the operation first',
    text: 'We study the manual spreadsheets, paper forms, communication bottlenecks, and network failures before touching a line of code. Software should mirror the operational reality.'
  },
  {
    num: '02',
    title: 'Dependable over decorative',
    text: 'We build the smallest dependable architecture that can carry the workload cleanly. We avoid bloated frameworks, obscure abstractions, and fragile external dependencies.'
  },
  {
    num: '03',
    title: 'Built for operator autonomy',
    text: 'A great system empowers its operators. We write observable code, document runbooks, automate failovers, and ensure your team can operate without perpetual vendor lock-in.'
  }
]

const pillars = [
  {
    title: 'ISP & Network Systems',
    desc: 'MikroTik RouterOS API integrations, subscriber bandwidth accounting, RADIUS AAA infrastructure, and billing webhooks.'
  },
  {
    title: 'Custom Business Platforms',
    desc: 'Education information management (SIMS), internal workflow databases, client portals, and administrative dashboards.'
  },
  {
    title: 'Cloud & DevOps Automation',
    desc: 'Containerized Linux runtimes, automated CI/CD deployments, PostgreSQL connection pooling, and live telemetry probers.'
  }
]

export default function About() {
  return (
    <PageFrame
      eyebrow="About Altavox Tech"
      title="We build the systems that make important work move."
      intro="Altavox Tech is an engineering studio focused on custom software, ISP operational tooling, cloud infrastructure, and administrative clarity."
    >
      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a96b00]">
              Our Mission
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-[#162238] sm:text-4xl">
              Making complex operations clear, dependable, and easier to run.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              We approach technology as an active, dependable part of your organization, not a layer of cosmetic decoration. That means listening carefully, discovering the friction points in the real workflow, and delivering resilient software.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Based in Dar es Salaam, Tanzania and working with organizations across East Africa and beyond, we bridge the gap between business objectives, network hardware, and user experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[#162238] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e59a15]"
              >
                Inspect our live systems <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-[#162238] transition hover:border-[#e59a15]"
              >
                Start a conversation
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-bold text-[#162238]">Our Core Practice Areas</h3>
            <div className="mt-6 space-y-5">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <h4 className="font-bold text-[#162238]">{pillar.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a96b00]">
              Engineering Tenets
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#162238]">
              Principles that govern every delivery.
            </h2>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {principles.map(({ num, title, text }) => (
              <div key={num} className="rounded-xl border border-slate-200 bg-[#f8fafc] p-6">
                <span className="font-mono text-2xl font-black text-[#e59a15]">{num}</span>
                <h3 className="mt-4 text-lg font-bold text-[#162238]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification & Trust */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-[#ead9ad] bg-[#fffaf0] p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#a96b00]">
                <ShieldCheck className="size-4" /> Operational Truth
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-[#162238]">
                Evidence over exaggeration.
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We do not publish invented outcomes, inflated uptime figures, or mock customer quotes. Every case study and architecture model we showcase represents verifiable code and live production deployments.
              </p>
            </div>
            <Link
              href="/start-project"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#162238] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#e59a15]"
            >
              Consult with us <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
