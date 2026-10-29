import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, ExternalLink, Globe, Layers, Server, ShieldCheck } from 'lucide-react'
import { notFound } from 'next/navigation'
import { PageFrame } from '@/components/site-shell'
import { projects } from '@/lib/site-data'

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()

  const hasScreenshot = ['sammena', 'jaslyn-net'].includes(project.slug)

  return (
    <PageFrame
      eyebrow={project.category}
      title={project.name}
      intro={project.summary}
    >
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#162238] transition"
          >
            <ArrowLeft className="size-4" /> Back to all projects
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            {/* System Visual Preview */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-[#0c1626] shadow-sm">
              {hasScreenshot ? (
                <Image
                  src={`/projects/${project.slug}-live.png`}
                  alt={`${project.name} live system screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  priority
                />
              ) : (
                <div className="flex h-full w-full flex-col justify-between p-8 bg-gradient-to-br from-[#162238] to-[#08121f]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#f3a923]">
                      {project.category}
                    </span>
                    <span className="rounded bg-white/10 px-2.5 py-1 font-mono text-xs text-slate-300">
                      {project.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-white">{project.name}</h3>
                    <p className="mt-2 text-sm text-slate-400">{project.description}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Problem & Context */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a96b00]">
                Context & Operational Scope
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#162238]">The problem behind the build</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {project.description}
              </p>
            </div>

            {/* Key Delivered Capabilities */}
            {project.keyFeatures && (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a96b00]">
                  Delivered Capabilities
                </span>
                <h3 className="mt-2 text-xl font-bold text-[#162238]">Core functional modules</h3>
                <div className="mt-6 space-y-3">
                  {project.keyFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 rounded-lg bg-slate-50 p-3.5 border border-slate-100">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#e59a15]" />
                      <span className="text-sm text-slate-700 leading-5">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Aside Information */}
          <aside className="space-y-6">
            {/* Status & Quick Specs */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                Project Status
              </span>
              <p className="mt-2 text-xl font-extrabold text-[#162238]">{project.status}</p>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                  Client / Operator
                </span>
                <p className="mt-1 text-sm font-semibold text-[#162238]">{project.client}</p>
              </div>

              {project.url && (
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#162238] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#e59a15]"
                  >
                    Open Live Deployment <ExternalLink className="size-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* Architecture Specifications */}
            {project.architecture && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a96b00]">
                  Architecture Specification
                </span>
                <div className="mt-4 space-y-4 text-xs">
                  <div>
                    <p className="font-bold text-slate-500 uppercase tracking-wider">Frontend</p>
                    <p className="mt-1 font-mono text-slate-800">{project.architecture.frontend}</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-500 uppercase tracking-wider">Backend & Workers</p>
                    <p className="mt-1 font-mono text-slate-800">{project.architecture.backend}</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-500 uppercase tracking-wider">Database & Storage</p>
                    <p className="mt-1 font-mono text-slate-800">{project.architecture.database}</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-500 uppercase tracking-wider">Infrastructure</p>
                    <p className="mt-1 font-mono text-slate-800">{project.architecture.infrastructure}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Operational Metrics */}
            {project.metrics && (
              <div className="rounded-2xl border border-[#ead9ad] bg-[#fffaf0] p-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a96b00]">
                  Operational Metrics
                </span>
                <div className="mt-4 space-y-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="border-b border-[#ead9ad]/50 pb-2.5 last:border-0 last:pb-0">
                      <p className="text-2xl font-extrabold text-[#162238]">{m.value}</p>
                      <p className="text-xs text-slate-600">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                Technology Tags
              </span>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageFrame>
  )
}
