import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Clock3, Cpu, Database, ExternalLink, Globe, Network, ShieldCheck, Users } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { projects } from '@/lib/site-data'

const topics = [
  'ISP Operations & MikroTik',
  'School SIMS & Education',
  'PostgreSQL & Drizzle',
  'Cloud Infrastructure',
  'Security Engineering'
]

const articles = [
  {
    category: 'ISP Operations',
    title: 'Automating MikroTik RouterOS billing without breaking active connections',
    text: 'How to structure queue provisioning and M-Pesa reconciliation so subscribers renew without dropping live VoIP or streams.',
    time: '11 min read'
  },
  {
    category: 'Systems Architecture',
    title: 'Designing reliable systems for teams that cannot stop',
    text: 'Practical notes on observability, failover routing, and the small decisions that keep operational software dependable.',
    time: '8 min read'
  },
  {
    category: 'Security & Auth',
    title: 'Building security foundations that make business growth safer',
    text: 'Role-based access control, session hygiene, and database constraints built directly into the foundation.',
    time: '6 min read'
  },
]

export default function Page() {
  const featuredProjects = projects.filter((p) => ['sammena', 'jaslyn-net'].includes(p.slug))

  return (
    <PageFrame>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a96b00]">
              <span>Software Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Systems Development</span>
              <span aria-hidden="true">·</span>
              <span>ISP Operations</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-[#162238] sm:text-6xl">
              Technology built for <span className="text-[#e59a15]">real work.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Altavox Tech designs software platforms, ISP billing systems, and connected operational tools that help organizations run smoothly, reliably, and without guesswork.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[#162238] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#e59a15]"
              >
                Explore our systems <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/computer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-[#162238] transition hover:border-[#e59a15] hover:text-[#a96b00]"
              >
                Altavox Computer Console
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#e59a15]" />
                Auditable Architecture
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#e59a15]" />
                Built for High Uptime
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#e59a15]" />
                Based in East Africa
              </span>
            </div>
          </div>

          {/* Operating View Dashboard Card */}
          <div className="rounded-2xl bg-[#162238] p-6 shadow-xl shadow-slate-300/40 text-white">
            <div className="rounded-xl border border-white/10 bg-[#1d2d45] p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded bg-[#e59a15] text-[#162238] font-bold text-xs">
                    AV
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                    Altavox Operating View
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#f3a923]">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" /> Live Cluster
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Metric label="Active Systems" value="04" icon={<Cpu className="size-4 text-[#f3a923]" />} />
                <Metric label="ISP Subscriber Sessions" value="2,400+" icon={<Network className="size-4 text-[#f3a923]" />} />
                <Metric label="Security Check Gates" value="100%" icon={<ShieldCheck className="size-4 text-[#f3a923]" />} />
                <Metric label="Automated Billing Rate" value="98.4%" icon={<Users className="size-4 text-[#f3a923]" />} />
              </div>

              <div className="mt-5 rounded-lg bg-white/5 p-4 border border-white/5">
                <div className="mb-2 flex justify-between text-xs text-slate-300">
                  <span>Overall Deployment Health</span>
                  <span className="font-semibold text-emerald-400">Nominal · 0 alerts</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[94%] rounded-full bg-[#f3a923]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Production Systems */}
      <section className="border-b border-slate-200 bg-[#f8fafc] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#a96b00]">
                Active Systems in Production
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#162238]">
                Proven software solving real constraints.
              </h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-1 text-sm font-bold text-[#a96b00] hover:text-[#162238]">
              View all 4 systems <ChevronRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, idx) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#e59a15] hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0c1626]">
                  <Image
                    src={`/projects/${project.slug}-live.png`}
                    alt={`${project.name} live system screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute left-4 top-4 rounded bg-white/95 px-2.5 py-1 text-[11px] font-bold text-[#162238] shadow-sm">
                    {project.status}
                  </div>
                </div>

                <div className="p-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a96b00]">
                    0{idx + 1} · {project.category}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-[#162238]">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{project.summary}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#162238] hover:text-[#e59a15]"
                    >
                      Specifications <ArrowUpRight className="size-4" />
                    </Link>

                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#a96b00] hover:underline"
                      >
                        Live Domain <ExternalLink className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Altavox Pillars */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#a96b00]">
                Why Altavox Tech
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#162238]">
                We make complex operations easier to run.
              </h2>
            </div>
            <Link href="/about" className="inline-flex items-center gap-1 text-sm font-bold text-[#a96b00]">
              How we work <ChevronRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Feature
              title="Operational Grounding"
              text="Every database schema and user interface starts with the people, constraints, and hardware behind the real-world workflow."
            />
            <Feature
              title="Connected by Default"
              text="We connect web applications, payment webhooks (M-Pesa), network routers, and notification bots into one coherent operating picture."
            />
            <Feature
              title="Observable & Maintainable"
              text="Strict TypeScript typing, clear audit logging, containerized runtimes, and predictable failover paths are built into every release."
            />
          </div>
        </div>
      </section>

      {/* Community & Field Notes Section */}
      <section className="bg-[#f8fafc] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_300px] lg:px-8">
          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#a96b00]">
                  Engineering Field Notes
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-[#162238]">Ideas for better systems</h2>
              </div>
              <Link href="/insights" className="hidden items-center gap-1 text-sm font-bold text-[#a96b00] sm:flex">
                All field notes <ChevronRight className="size-4" />
              </Link>
            </div>

            <div className="mt-8 space-y-4">
              {articles.map((article) => (
                <Link
                  href="/insights"
                  key={article.title}
                  className="group block rounded-xl border border-slate-200 bg-white p-6 transition hover:border-[#e59a15] hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a96b00]">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <Clock3 className="size-3.5" /> {article.time}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-[#162238] group-hover:text-[#a96b00] transition">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{article.text}</p>
                </Link>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-[#162238]">
                <Globe className="size-4 text-[#e59a15]" /> Browse by domain
              </div>
              <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
                {topics.map((topic) => (
                  <Link
                    href="/insights"
                    key={topic}
                    className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-[#fffaf0] hover:text-[#a96b00] transition"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#ead9ad] bg-[#fffaf0] p-6">
              <ShieldCheck className="size-5 text-[#a96b00]" />
              <h3 className="mt-3 text-base font-bold text-[#162238]">Software that endures</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                We craft software designed to remain maintainable 5+ years down the road, avoiding premature framework churn.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-[#162238] text-white py-14">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f3a923]">
              Have an operational challenge?
            </p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Bring us the problem behind the brief.</h2>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              Talk directly with software and network engineers to assess your system requirements.
            </p>
          </div>
          <Link
            href="/start-project"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#e59a15] px-6 py-3.5 text-sm font-bold text-[#162238] transition hover:bg-white shrink-0"
          >
            Start a project <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </PageFrame>
  )
}

function Metric({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between">
        {icon}
        <span className="font-mono text-xl font-extrabold text-white">{value}</span>
      </div>
      <p className="mt-2 text-xs text-slate-400">{label}</p>
    </div>
  )
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-4 size-2.5 rounded-full bg-[#e59a15]" />
      <h3 className="text-lg font-bold text-[#162238]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  )
}
