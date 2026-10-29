import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { projects } from '@/lib/site-data'

export default function CaseStudies() {
  return (
    <PageFrame
      eyebrow="Case Studies & Results"
      title="Evidence over exaggeration."
      intro="Detailed architectural breakdowns and operational outcomes from our client and internal systems."
    >
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <article
              key={project.slug}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-[#e59a15]"
            >
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a96b00]">
                  Case Study · {project.category}
                </span>
                <h2 className="mt-3 text-2xl font-bold text-[#162238]">{project.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>

                {project.metrics && (
                  <div className="mt-6 grid grid-cols-3 gap-3 border-y border-slate-100 py-4">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-xl font-extrabold text-[#162238]">{m.value}</p>
                        <p className="text-[11px] text-slate-500 leading-4">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#162238] hover:text-[#e59a15] transition"
                >
                  Read full case breakdown <ArrowRight className="size-4" />
                </Link>

                <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                  <ShieldCheck className="size-3.5 text-emerald-600" /> Verified deployment
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 text-center sm:p-12">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100 text-[#162238]">
            <FileText className="size-6" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-[#162238]">Responsible Engineering Documentation</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
            We only publish technical case studies once production metrics have stabilized, security audits have concluded, and the operating partner has approved public disclosure.
          </p>
        </div>
      </section>
    </PageFrame>
  )
}
