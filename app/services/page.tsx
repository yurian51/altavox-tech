'use client'

import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Network,
  Server,
  Shield,
  Sparkles,
  PhoneCall,
  Calendar
} from 'lucide-react'
import { JanBaskHeader } from '@/components/janbask-header'
import { JanBaskFooter } from '@/components/janbask-footer'
import { serviceDetails } from '@/lib/site-data'

const icons = [Code2, Network, Server, Globe, Database, Shield]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <JanBaskHeader />

      <main className="flex-1 pb-24">
        {/* Hero in JanBask Style */}
        <section className="bg-gradient-to-b from-[#07294d] via-[#093563] to-[#051c36] text-white py-14 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <span className="rounded-full bg-[#f26522] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Capabilities & Services
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold">
                Technology Services Engineered for Real Environments
              </h1>
              <p className="text-base text-slate-200">
                From mission-critical ISP billing portals to high-performance web systems and database architecture, we bring practical engineering discipline to your systems.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service, index) => {
              const Icon = icons[index % icons.length]
              return (
                <div
                  key={service.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition hover:-translate-y-1 hover:border-[#f26522] hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-orange-100 text-[#f26522]">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#07294d]">{service.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{service.summary}</p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Deliverables & Scope
                      </p>
                      <ul className="mt-3 space-y-2 text-xs text-slate-700">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#f26522]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl bg-orange-50 border border-orange-200 p-3 text-xs text-[#07294d] font-semibold">
                    {service.highlight}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Process Roadmap in JanBask Style */}
          <div className="mt-20 rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase text-[#f26522]">Execution Lifecycle</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#07294d]">
                How Altavox Delivers Systems
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-4">
              {[
                { step: '01', title: 'Listen & Diagnose', desc: 'Observe the current operational friction and identify the real problem before choosing tech.' },
                { step: '02', title: 'Smallest System', desc: 'Design the leanest, most dependable architecture that reliably carries the workload.' },
                { step: '03', title: 'Staging & Sandbox', desc: 'Verify API webhooks, database constraints, and queue latency in realistic live staging.' },
                { step: '04', title: 'Handover & SLA', desc: 'Train internal operators, document runbooks, and provide continuous observability.' }
              ].map((st) => (
                <div key={st.step} className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                  <span className="text-xl font-mono font-black text-[#f26522]">{st.step}</span>
                  <h4 className="mt-3 text-sm font-bold text-[#07294d]">{st.title}</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f26522] px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-[#e05312] transition"
              >
                <span>Initiate an Engineering Project</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <JanBaskFooter />
    </div>
  )
}
