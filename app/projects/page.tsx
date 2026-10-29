'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  ExternalLink,
  Rocket,
  ShieldCheck,
  Filter,
  Server,
  CheckCircle2,
  Calendar,
  Layers,
  Network,
  Activity,
  Sparkles
} from 'lucide-react'
import { JanBaskHeader } from '@/components/janbask-header'
import { JanBaskFooter } from '@/components/janbask-footer'
import { projects } from '@/lib/site-data'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = [
    'All',
    'Education technology',
    'ISP operations & connectivity',
    'Network operations & billing',
    'Cloud technology'
  ]

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <JanBaskHeader />

      <main className="flex-1 pb-24">
        {/* Hero in JanBask Style */}
        <section className="bg-gradient-to-b from-[#07294d] via-[#093563] to-[#051c36] text-white py-14 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <span className="rounded-full bg-[#f26522] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Altavox Launchpad & Production Systems
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold">
                Live Software Platforms Engineered for Real Operations
              </h1>
              <p className="text-base text-slate-200">
                Explore our active deployments and engineering initiatives. Each system addresses tangible administrative, network, or cloud operational requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          {/* Quick Banner */}
          <div className="mb-10 flex flex-col justify-between gap-6 rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:flex-row sm:items-center sm:p-8 shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f26522]">
                <Rocket className="size-4" /> Production Systems
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-extrabold text-[#07294d]">
                Operating Systems Built with Purpose
              </h2>
              <p className="mt-1 max-w-2xl text-xs text-slate-600">
                Inspect architectural details, core capabilities, and infrastructure configurations of our live platforms.
              </p>
            </div>
            <div className="flex shrink-0">
              <Link
                href="/computer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#07294d] px-5 py-3 text-xs font-bold text-white hover:bg-[#051c36] transition shadow-md"
              >
                Open Computer Console <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Category Filters in JanBask Pill Style */}
          <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="size-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                  selectedCategory === cat
                    ? 'bg-[#07294d] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects List */}
          <div className="space-y-12">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs transition hover:border-[#f26522] hover:shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-[#f26522]">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-2xl font-bold text-[#07294d]">{project.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">Client: {project.client}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      {project.status}
                    </span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-6 grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {project.summary}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Capabilities</p>
                      <ul className="mt-2.5 space-y-2 text-xs text-slate-700">
                        {project.keyFeatures.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="size-4 text-[#f26522] shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    {/* Metrics Box */}
                    {project.metrics && (
                      <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 space-y-2">
                        <p className="text-[11px] font-mono font-bold uppercase text-[#07294d]">
                          Verified Operational Metrics
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {project.metrics.map((m, i) => (
                            <div key={i} className="rounded-xl bg-white p-2.5 border border-slate-100">
                              <p className="text-lg font-black text-[#f26522]">{m.value}</p>
                              <p className="text-[11px] text-slate-500">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Architecture Pill Box */}
                    {project.architecture && (
                      <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 space-y-1.5 text-xs">
                        <p className="text-[11px] font-mono font-bold uppercase text-[#07294d]">
                          Architecture Stack
                        </p>
                        <p className="text-slate-600"><strong>Frontend:</strong> {project.architecture.frontend}</p>
                        <p className="text-slate-600"><strong>Backend:</strong> {project.architecture.backend}</p>
                        <p className="text-slate-600"><strong>Database:</strong> {project.architecture.database}</p>
                        <p className="text-slate-600"><strong>Infra:</strong> {project.architecture.infrastructure}</p>
                      </div>
                    )}

                    <div className="pt-2">
                      <Link
                        href={`/courses/${project.slug}`}
                        className="block w-full rounded-xl bg-[#07294d] py-3 text-center text-xs font-bold text-white hover:bg-[#051c36] transition shadow-xs"
                      >
                        Inspect Blueprint & Live Batch →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <JanBaskFooter />
    </div>
  )
}
