'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Bot, CheckCircle2, Cloud, Globe2, MessageSquare, Settings2, ShieldCheck, Sparkles } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'

const providers = [
  { name: 'Altavox Cloud', detail: 'Native runtime for bots, websites & APIs', icon: Cloud, tone: 'bg-cyan-300 text-[#08121f]', connected: true },
]
const channels = [
  { name: 'Website chat', detail: 'Embed an assistant on your site', icon: Globe2 },
  { name: 'WhatsApp', detail: 'Customer conversations & alerts', icon: MessageSquare },
  { name: 'Telegram', detail: 'Communities, support & commands', icon: Bot },
  { name: 'Slack / Discord', detail: 'Internal team operations', icon: MessageSquare },
]
const platformFeatures = [
  ['Projects & teams', 'Organise services, members, roles, activity, and audit history in one workspace.'],
  ['Web services', 'Run Node, Python, Go, PHP, Ruby, Docker, and other HTTP services with health checks.'],
  ['Private services', 'Keep internal APIs and service-to-service workloads off the public internet.'],
  ['Background workers', 'Run queues, consumers, agents, and long-lived processes independently from web traffic.'],
  ['Static sites', 'Build and serve marketing sites, documentation, and frontend applications from Git.'],
  ['Preview environments', 'Create isolated deploy previews for every branch, pull request, or review environment.'],
  ['Deploys & rollbacks', 'Use Git, Docker, deploy hooks, release history, zero-downtime deploys, and instant rollback.'],
  ['Autoscaling', 'Scale service instances from traffic and resource demand with health-aware routing.'],
  ['Managed Postgres', 'Provision production databases with backups, private networking, and connection controls.'],
  ['Managed Redis', 'Add low-latency caching, queues, sessions, rate limits, and ephemeral application state.'],
  ['Supabase data layer', 'Offer Postgres, authentication, Row Level Security, REST APIs, and realtime data as native Altavox modules.'],
  ['Supabase Storage', 'Manage private or public file storage, media buckets, signed URLs, and upload policies per project.'],
  ['Supabase Edge Functions', 'Run secure server-side functions close to users for webhooks, integrations, scheduled work, and APIs.'],
  ['Realtime & events', 'Stream database changes, presence, and broadcast events to dashboards, bots, and customer applications.'],
  ['Persistent disks', 'Attach durable storage to stateful services with controlled mounts and service ownership.'],
  ['Domains & TLS', 'Connect custom domains, redirects, automatic HTTPS certificates, and environment-aware URLs.'],
  ['Environment groups', 'Share and protect development, preview, and production secrets across related services.'],
  ['Logs & metrics', 'Inspect build, deploy, runtime, request, CPU, memory, bandwidth, and health signals.'],
  ['Regions & networking', 'Choose deployment regions and connect services through private internal networking.'],
  ['Bot operations', 'Manage channel credentials, webhooks, knowledge sources, tools, and conversation analytics.'],
]

export default function DeploymentsPage() {
  const [mode, setMode] = useState<'bot' | 'website'>('bot')
  const [selectedChannel, setSelectedChannel] = useState('Website chat')
  const [selectedProvider, setSelectedProvider] = useState('Altavox Cloud')
  const [notice, setNotice] = useState('')

  function handleDeploy() {
    setNotice(`${mode === 'bot' ? 'Bot' : 'Website'} setup saved in Altavox. ${selectedProvider === 'Altavox Cloud' ? 'Altavox will provision the runtime and give you a live URL.' : `Vercel is selected as an optional hosting connection.`}`)
  }

  return <PageFrame eyebrow="Altavox Launchpad" title="Deploy bots, websites, and the systems behind them." intro="A practical deployment workspace for taking a product from repository to a live URL and connecting assistants to the channels your users already trust.">
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">New deployment</p><h2 className="mt-3 text-2xl font-medium text-white">What are you launching?</h2></div>
            <div className="flex rounded-full border border-white/10 bg-black/10 p-1" role="tablist" aria-label="Deployment type">
              {(['bot','website'] as const).map((item) => <button key={item} role="tab" aria-selected={mode === item} onClick={() => setMode(item)} className={`rounded-full px-4 py-2 text-sm capitalize transition ${mode === item ? 'bg-cyan-300 font-semibold text-[#08121f]' : 'text-slate-400 hover:text-white'}`}>{item}</button>)}
            </div>
          </div>
          <div className="grid gap-5 py-7 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-300 sm:col-span-2">Project name<input className="rounded-xl border border-white/10 bg-[#07101b] px-4 py-3 text-white outline-none ring-cyan-300 transition focus:ring-2" placeholder={mode === 'bot' ? 'e.g. Customer support assistant' : 'e.g. Jaslyn Net portal'} /></label>
            <label className="flex flex-col gap-2 text-sm text-slate-300 sm:col-span-2">Repository or source URL<input className="rounded-xl border border-white/10 bg-[#07101b] px-4 py-3 text-white outline-none ring-cyan-300 transition focus:ring-2" placeholder="https://github.com/organization/project" /></label>
            {mode === 'bot' && <div className="sm:col-span-2"><p className="mb-3 text-sm text-slate-300">First channel</p><div className="grid gap-3 sm:grid-cols-2">{channels.map(({name, detail, icon: Icon}) => <button key={name} onClick={() => setSelectedChannel(name)} className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${selectedChannel === name ? 'border-cyan-300/70 bg-cyan-300/10' : 'border-white/10 bg-black/10 hover:border-white/25'}`}><Icon className="mt-0.5 size-5 text-cyan-300" /><span><span className="block text-sm font-medium text-white">{name}</span><span className="mt-1 block text-xs leading-5 text-slate-400">{detail}</span></span></button>)}</div></div>}
          </div>
          <button onClick={handleDeploy} className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#08121f] transition hover:bg-white">Prepare deployment <ArrowUpRight className="size-4" /></button>
          {notice && <p role="status" className="mt-4 flex items-center gap-2 text-sm text-cyan-200"><CheckCircle2 className="size-4" />{notice}</p>}
        </div>
        <aside className="rounded-3xl border border-white/10 bg-[#0c1a2a] p-6 sm:p-8"><div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300"><ShieldCheck className="size-5" /></div><h2 className="mt-6 text-xl font-medium text-white">Built for controlled releases</h2><p className="mt-3 text-sm leading-7 text-slate-400">Each deployment can have its own environment variables, domain, logs, rollback path, and channel credentials.</p><div className="mt-8 flex flex-col gap-4">{['Preview before production','Environment-aware secrets','Logs and health checks','Rollback-ready releases'].map(item => <div key={item} className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="size-4 text-cyan-300" />{item}</div>)}</div><Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white">Talk to an engineer <ArrowUpRight className="size-4" /></Link></aside>
      </div>
      <div className="mt-20"><div className="mb-7 flex items-end justify-between gap-4"><div><p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">Runtime options</p><h2 className="mt-3 text-2xl font-medium text-white">Altavox runs the deployment.</h2></div><Settings2 className="hidden size-5 text-slate-500 sm:block" /></div><div className="grid gap-4 md:grid-cols-3">{providers.map(({name, detail, icon: Icon, tone, connected}) => <button key={name} onClick={() => setSelectedProvider(name)} className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition ${selectedProvider === name ? 'border-cyan-300/70 bg-white/[0.07]' : 'border-white/10 bg-white/[0.03] hover:border-white/25'}`}><span className={`grid size-11 place-items-center rounded-xl ${tone}`}><Icon className="size-5" /></span><span className="min-w-0"><span className="flex items-center gap-2 text-sm font-medium text-white">{name}{connected && <span className="rounded-full bg-cyan-300/15 px-2 py-0.5 text-[10px] text-cyan-200">ready</span>}</span><span className="mt-1 block text-xs text-slate-400">{detail}</span></span></button>)}</div></div>
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">Altavox platform</p><h2 className="mt-3 text-2xl font-medium text-white">Vercel-level capabilities, owned by Altavox.</h2><p className="mt-3 text-sm leading-7 text-slate-400">These are native Altavox controls, not a thin wrapper around another provider. Start with the modules your project needs and expand as your system grows.</p></div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{platformFeatures.map(([name, detail]) => <div key={name} className="rounded-2xl border border-white/10 bg-[#07101b] p-4"><div className="flex items-center gap-2 text-sm font-medium text-white"><CheckCircle2 className="size-4 text-cyan-300" />{name}</div><p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p></div>)}</div>
      </div>
      <div className="mt-16 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8"><div><div className="flex items-center gap-2 text-cyan-200"><Sparkles className="size-4" /><span className="font-mono text-xs uppercase tracking-[0.18em]">Managed by Altavox</span></div><h2 className="mt-3 text-2xl font-medium text-white">Need WhatsApp approval or production secrets?</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">Altavox owns the deployment layer: runtime provisioning, domains, secrets, logs, monitoring, and releases. Vercel and other platforms can remain optional connections for features you choose to use.</p></div><Link href="/start-project" className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#08121f] sm:mt-0">Start setup <ArrowUpRight className="size-4" /></Link></div>
    </section>
  </PageFrame>
}
