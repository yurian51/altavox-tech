'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check, ExternalLink, Monitor } from 'lucide-react'
import { AltavoxHeader } from '@/components/altavox-header'
import { AltavoxFooter } from '@/components/altavox-footer'
import { projects } from '@/lib/site-data'

const screenshotUrl = (site: string) =>
  'https://image.thum.io/get/width/1440/crop/1000/noanimate/' + site

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <AltavoxHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#071d34] text-white">
          <div className="absolute inset-0 opacity-20" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-orange-400">Selected work · Altavox Tech</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Two platforms. Built around real operations.</h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">We focus our product work on connectivity operations and school information systems. Explore Jaslyn Net and Sammena.</p>
              </div>
              <div className="border-l-2 border-[#f26522] pl-5 text-sm leading-6 text-slate-300">
                <span className="block text-3xl font-semibold text-white">02</span>
                Active product initiatives
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f26522]">Our projects</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Platforms in development</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-500">Each project has one live website screenshot. The layout remains responsive across screen sizes.</p>
          </div>

          <div className="space-y-16 sm:space-y-20">
            {projects.map((project, index) => (
              <article key={project.slug} className="min-w-0">
                <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-12">
                  <div className="min-w-0">
                    <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#f26522]">0{index + 1} / {project.category}</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#071d34] sm:text-4xl">{project.name}</h3>
                    <p className="mt-4 text-base font-medium leading-7 text-slate-700">{project.summary}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-500">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => <span key={tag} className="border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">{tag}</span>)}
                    </div>

                    <div className="mt-8">
                      <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-500">Platform scope</p>
                      <ul className="mt-4 space-y-3">
                        {project.keyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                            <Check className="mt-1 size-4 shrink-0 text-[#f26522]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 bg-[#f26522] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#d95113]">
                        Visit live platform <ExternalLink className="size-4" />
                      </a>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500"><span className="size-2 rounded-full bg-amber-500" /> In development</span>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-500">Website screenshot</p>
                      <span className="inline-flex items-center gap-2 text-[10px] font-mono text-slate-400"><Monitor className="size-3.5" /> SINGLE LIVE CAPTURE</span>
                    </div>
                    <figure className="min-w-0 overflow-hidden border border-slate-200 bg-slate-100">
                      <figcaption className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        <span>{project.name}</span>
                        <span className="font-mono font-normal text-slate-400">1440px source</span>
                      </figcaption>
                      <div className="relative aspect-[16/10] w-full bg-slate-200">
                        <Image
                          src={screenshotUrl(project.url || '')}
                          alt={project.name + ' live website screenshot'}
                          fill
                          unoptimized
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
                          className="object-cover object-top"
                        />
                      </div>
                    </figure>
                    <p className="mt-2 text-[10px] leading-5 text-slate-400">One source capture per project, displayed in a fluid container that scales with the screen.</p>
                  </div>
                </div>
                {index < projects.length - 1 && <div className="mt-14 border-b border-slate-200 sm:mt-20" />}
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f26522]">Altavox engineering</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#071d34]">Focused products, carefully engineered.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">From ISP operations to school administration, our work is grounded in practical systems and maintainable engineering.</p>
            </div>
            <Link href="/contact" className="inline-flex min-h-11 shrink-0 items-center gap-2 bg-[#071d34] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#123b61]">Discuss a project <ArrowUpRight className="size-4" /></Link>
          </div>
        </section>
      </main>

      <AltavoxFooter />
    </div>
  )
}
