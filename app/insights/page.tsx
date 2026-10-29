'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, ChevronRight, Clock3, Filter, MessageSquare, Search, ShieldCheck } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'

const articles = [
  {
    slug: 'designing-dependable-operational-software',
    category: 'Systems Architecture',
    title: 'Designing dependable operational software for teams that cannot stop',
    summary: 'A practical field guide for turning complex, paper-heavy workflows into clear, observable systems that operators can trust during peak loads.',
    readTime: '8 min read',
    date: 'Oct 2026',
    topics: ['Observability', 'Failover', 'Data Integrity']
  },
  {
    slug: 'isp-billing-mikrotik-automation',
    category: 'ISP Operations',
    title: 'Automating MikroTik RouterOS billing without breaking active connections',
    summary: 'How to structure queue provisioning, RADIUS accounting, and M-Pesa webhook reconciliation so subscribers receive instant renewal without dropping live VoIP or video streams.',
    readTime: '11 min read',
    date: 'Oct 2026',
    topics: ['MikroTik API', 'M-Pesa Webhooks', 'RouterOS']
  },
  {
    slug: 'security-boundaries-before-features',
    category: 'Security & Auth',
    title: 'Security boundaries before features: Role-based access in school management systems',
    summary: 'Why separating student report card editing rights from fee payment verification is essential, and how to enforce it at the database schema layer with Drizzle & PostgreSQL.',
    readTime: '6 min read',
    date: 'Sep 2026',
    topics: ['RBAC', 'PostgreSQL', 'SIMS Security']
  },
  {
    slug: 'truthful-telemetry-monitoring',
    category: 'Network Operations',
    title: 'From telemetry noise to actionable decisions in local networks',
    summary: 'What a truthful operations dashboard must display before claiming an ISP cluster is healthy, and how to avoid vanity ping charts.',
    readTime: '7 min read',
    date: 'Sep 2026',
    topics: ['SNMP', 'Network Telemetry', 'Latency Tracking']
  }
]

export default function Insights() {
  const [selectedTopic, setSelectedTopic] = useState('All')

  const allTopics = ['All', 'Systems Architecture', 'ISP Operations', 'Security & Auth', 'Network Operations']

  const filteredArticles = selectedTopic === 'All'
    ? articles
    : articles.filter((a) => a.category === selectedTopic)

  return (
    <PageFrame
      eyebrow="Community & Field Notes"
      title="A clearer place to learn, build, and operate."
      intro="Practical technical notes, architecture patterns, and operational lessons from our production deployments across East Africa."
    >
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            {/* Filter Tabs */}
            <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="size-3.5" /> Topic:
              </span>
              {allTopics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                    selectedTopic === topic
                      ? 'bg-[#162238] text-white shadow-sm font-semibold'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Articles List */}
            <div className="space-y-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-[#e59a15] hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a96b00]">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <Clock3 className="size-3.5" /> {article.readTime} · {article.date}
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-bold text-[#162238] sm:text-2xl">
                    {article.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {article.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {article.topics.map((t) => (
                        <span key={t} className="rounded bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#162238] hover:text-[#e59a15] transition"
                    >
                      Discuss this topic <ChevronRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-[#162238]">
                <BookOpen className="size-4 text-[#e59a15]" /> Field Notes Mission
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-600">
                We write for network engineers, school administrators, and product leaders building systems in developing digital infrastructures. No superficial marketing fluff.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ead9ad] bg-[#fffaf0] p-6">
              <ShieldCheck className="size-5 text-[#a96b00]" />
              <h3 className="mt-3 text-base font-bold text-[#162238]">Trust is an engineering feature</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Every technical claim should have an verifiable architecture, a timestamp, and an accountable maintainer.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <MessageSquare className="size-5 text-[#162238]" />
              <h3 className="mt-3 text-base font-bold text-[#162238]">Have a technical question?</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Send us your operational challenge or architecture questions.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#a96b00] hover:text-[#162238] transition"
              >
                Send a question <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageFrame>
  )
}
