'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ExternalLink, Rocket, ShieldCheck, Filter, Server, CheckCircle2 } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { projects } from '@/lib/site-data'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Education technology', 'ISP operations & connectivity', 'Network operations & billing', 'Cloud technology']

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory)

  return (
    <PageFrame
      eyebrow="Altavox Launchpad & Systems"
      title="Live software platforms engineered for real operations."
      intro="Explore our active deployments and engineering initiatives. Each system addresses tangible administrative, network, or cloud operational requirements."
    >
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Banner */}
        <div className="mb-10 flex flex-col justify-between gap-6 rounded-2xl border border-[#ead9ad] bg-[#fffaf0] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a96b00]">
              <Rocket className="size-4" /> Production Systems
            </div>
            <h2 className="mt-2 text-2xl font-extrabold text-[#162238]">
              Operating systems built with purpose.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Explore live systems in action. Inspect architectural details, core capabilities, and infrastructure configurations.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/computer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#162238] px-5 py-3 text-sm font-bold text-white hover:bg-[#e59a15] transition"
            >
              Open Computer Console <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="size-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                selectedCategory === cat
                  ? 'bg-[#162238] text-white shadow-sm font-semibold'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const hasScreenshot = ['sammena', 'jaslyn-net'].includes(project.slug)

            return (
              <article
                key={project.slug}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#e59a15] hover:shadow-lg"
              >
                <div>
                  {/* Media / Visual Box */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0c1626]">
                    {hasScreenshot ? (
                      <Image
                        src={`/projects/${project.slug}-live.png`}
                        alt={`${project.name} live system interface`}
                        fill
                        className="object-cover object-top"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col justify-between p-6 bg-gradient-to-br from-[#162238] to-[#08121f]">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs uppercase tracking-wider text-[#f3a923]">
                            {project.category}
                          </span>
                          <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-300">
                            {project.status}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{project.name}</h3>
                          <p className="mt-1 text-xs text-slate-400">{project.client}</p>
                        </div>
                      </div>
                    )}

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold text-[#162238] shadow-sm">
                      <span className="size-2 rounded-full bg-emerald-500" /> {project.status}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a96b00]">
                        0{index + 1} · {project.category}
                      </span>
                    </div>

                    <h2 className="mt-2 text-2xl font-bold text-[#162238]">{project.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{project.summary}</p>

                    {/* Metrics if available */}
                    {project.metrics && (
                      <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-3 border border-slate-100">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="text-base font-extrabold text-[#162238]">{m.value}</p>
                            <p className="text-[10px] leading-4 text-slate-500">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 bg-slate-50/50">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <ShieldCheck className="size-4" /> Verified Altavox System
                  </span>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#162238] hover:text-[#e59a15] transition"
                    >
                      Specifications <ArrowUpRight className="size-4" />
                    </Link>
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-bold text-[#a96b00] hover:underline"
                      >
                        Live Domain <ExternalLink className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </PageFrame>
  )
}
