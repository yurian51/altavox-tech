import Link from 'next/link'
import { ArrowRight, CheckCircle2, Code2, Database, Globe, Network, Server, Shield, Sparkles } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { serviceDetails } from '@/lib/site-data'

const icons = [Code2, Network, Server, Globe, Database, Shield]

export default function Services() {
  return (
    <PageFrame
      eyebrow="Capabilities & Services"
      title="Technology services engineered for real operating environments."
      intro="From a mission-critical ISP billing portal to high-performance web systems and database architecture, we bring practical engineering discipline to your systems."
    >
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map((service, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#e59a15] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-[#162238]">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-xs font-bold text-[#a96b00]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#162238]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.summary}</p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Deliverables
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-slate-700">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#e59a15]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-[#fffaf0] border border-[#ead9ad] p-3 text-xs text-[#a96b00] font-medium">
                  {service.highlight}
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Roadmap */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a96b00]">
              How We Work
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-[#162238] sm:text-3xl">
              From requirement definition to stable release.
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We operate in transparent, predictable milestones with tangible prototypes and audit trails.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'System Discovery', desc: 'Identify bottlenecks, data structures, user roles, and constraints.' },
              { step: '02', title: 'Architecture & Schema', desc: 'Model database schemas, APIs, and security policies before coding.' },
              { step: '03', title: 'Incremental Build', desc: 'Deliver testable milestones with regular demos and staging previews.' },
              { step: '04', title: 'Controlled Release', desc: 'Deployment, failover validation, runbook handoff, and ongoing support.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="rounded-xl border border-slate-100 bg-[#f8fafc] p-5">
                <span className="font-mono text-xl font-black text-[#e59a15]">{step}</span>
                <h4 className="mt-3 text-base font-bold text-[#162238]">{title}</h4>
                <p className="mt-2 text-xs leading-5 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 rounded-2xl bg-[#162238] p-8 text-white sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#f3a923]">
              Need a tailored system?
            </span>
            <h2 className="mt-2 text-2xl font-bold">Bring us the problem behind the brief.</h2>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              Whether you need to automate ISP billing, build a School Information System, or deploy resilient cloud infrastructure, our engineering team is ready.
            </p>
          </div>
          <Link
            href="/start-project"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#e59a15] px-6 py-3.5 text-sm font-bold text-[#162238] transition hover:bg-white"
          >
            Start a project <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </PageFrame>
  )
}
