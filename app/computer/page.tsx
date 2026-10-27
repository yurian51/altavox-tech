'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Activity, ArrowUpRight, BarChart3, BellRing, Bot, Box, CheckCircle2, Cloud, Code2, Command, Cpu, Database, GitBranch, Globe2, KeyRound, Link2, LockKeyhole, Network, Play, Radar, Search, Server, ShieldCheck, Sparkles, TerminalSquare, Upload, WandSparkles, Workflow } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'

const modules = [
  { name: 'Workspace OS', detail: 'One visual workspace for projects, environments, deployments, and team permissions.', icon: Command },
  { name: 'Agent Room', detail: 'Design, test, supervise, and replay bot workflows before they reach a customer.', icon: Bot },
  { name: 'Service Fabric', detail: 'Connect web apps, APIs, workers, databases, storage, and events as one system.', icon: Network },
  { name: 'Data Vault', detail: 'Manage Postgres, files, backups, secrets, and access policies from one control plane.', icon: Database },
]

const actions = ['Create a project', 'Deploy a website', 'Deploy a bot', 'Open system map']

const advancedFeatures = [
  { icon: Upload, title: 'Universal intake', detail: 'Upload PDFs, DOCX, CSVs, images, and code archives for instant project-aware analysis.' },
  { icon: Code2, title: 'Build studio', detail: 'Generate, debug, refactor, test, and preview code with changes tracked before release.' },
  { icon: Bot, title: 'Agent mode', detail: 'Let agents plan tasks, use approved tools, run workflows, and return verifiable results.' },
  { icon: Database, title: 'Project intelligence', detail: 'Create a private knowledge base across docs, repositories, schemas, and operational history.' },
  { icon: Globe2, title: 'Research desk', detail: 'Run web research with source trails, citations, and evidence attached to every answer.' },
  { icon: Sparkles, title: 'Vision + voice', detail: 'Understand screenshots and diagrams, then capture voice notes and meeting transcripts.' },
  { icon: Workflow, title: 'Custom skills', detail: 'Package repeatable assistants, rules, and workflows for each project or team.' },
  { icon: ShieldCheck, title: 'Control center', detail: 'Manage roles, approvals, audit logs, usage, environments, rollbacks, and preview releases.' },
]

export default function ComputerPage() {
  const [activeAction, setActiveAction] = useState('')
  const [repository, setRepository] = useState('')
  const [importStatus, setImportStatus] = useState('')
  const [uploadedFile, setUploadedFile] = useState('')
  const [importError, setImportError] = useState('')
  const [projects, setProjects] = useState<Array<{ name: string; source: string; status: string }>>([])
  const [showActivity, setShowActivity] = useState(false)
  const [commandQuery, setCommandQuery] = useState('')
  const [commandResult, setCommandResult] = useState('')

  function importRepository() {
    const value = repository.trim()
    setImportError('')
    setImportStatus('')

    if (!value) {
      setImportError('Enter a GitHub repository URL to continue.')
      return
    }

    try {
      const url = new URL(value)
      if (url.hostname !== 'github.com' || url.pathname.split('/').filter(Boolean).length < 2) {
        throw new Error('invalid repository')
      }
      const projectName = url.pathname.split('/').filter(Boolean).pop() ?? 'Imported project'
      setProjects((current) => [{ name: projectName, source: 'GitHub', status: 'Plan ready' }, ...current])
      setImportStatus(`Repository queued: ${url.pathname.replace(/\/$/, '')}`)
    } catch {
      setImportError('Use a valid GitHub URL, for example github.com/owner/project.')
    }
  }

  function runCommand(command = commandQuery) {
    const normalized = command.trim().toLowerCase()
    if (!normalized) {
      setCommandResult('Try: scan project, show costs, open incidents, or deploy preview.')
      return
    }
    if (normalized.includes('scan') || normalized.includes('security')) {
      setCommandResult('Security scan queued: dependency, secret, and policy checks will run before release.')
    } else if (normalized.includes('cost') || normalized.includes('spend')) {
      setCommandResult('FinOps view ready: current projected spend is $42.18 with no budget drift detected.')
    } else if (normalized.includes('incident') || normalized.includes('alert')) {
      setCommandResult('Signal Center opened: 2 low-severity signals need review, no active outage detected.')
    } else if (normalized.includes('deploy') || normalized.includes('preview')) {
      setCommandResult('Preview deployment prepared with an isolated environment and rollback checkpoint.')
    } else {
      setCommandResult(`Altavox understood “${command.trim()}”. Add it to a workflow or choose a suggested action.`)
    }
  }

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    setImportError('')
    setImportStatus('')

    if (!file) return
    const supported = /\.(zip|tar|gz|tgz|pdf|docx|csv|png|jpg|jpeg|webp|gif|tsx|ts|jsx|js|py|md)$/i.test(file.name)
    if (!supported) {
      setImportError('Upload a project archive, PDF, DOCX, CSV, image, or supported code file.')
      event.target.value = ''
      return
    }
    if (file.size > 250 * 1024 * 1024) {
      setImportError('Archives must be smaller than 250 MB.')
      event.target.value = ''
      return
    }
    setUploadedFile(file.name)
    setProjects((current) => [{ name: file.name.replace(/\.(zip|tar|gz|tgz)$/i, ''), source: 'Upload', status: 'Plan ready' }, ...current])
    setImportStatus(`Upload ready: ${file.name} (${Math.ceil(file.size / 1024)} KB)`)
  }

  return <PageFrame eyebrow="Altavox Computer" title="Your complete digital operations desk." intro="A native control plane for building, deploying, operating, and improving the systems behind your business. Altavox Computer gives every project a home, every service a role, and every release a clear path." >
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-cyan-300/25 bg-cyan-300/[0.06] p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Bring your code</p><h2 className="mt-3 text-2xl font-medium text-white">Import a project directly into Altavox.</h2><p className="mt-2 text-sm leading-6 text-slate-400">Paste a public or private GitHub repository, or upload a project archive. Altavox will inspect the stack, create an environment, and prepare the first deployment plan.</p></div>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">GitHub + upload</span>
        </div>
        <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_auto_auto]">
          <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#07101b] px-4 py-3"><Link2 className="size-4 shrink-0 text-cyan-300" /><span className="sr-only">GitHub repository URL</span><input value={repository} onChange={(event) => setRepository(event.target.value)} placeholder="https://github.com/owner/project" className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-600" /></label>
          <button type="button" onClick={importRepository} className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#08121f] transition hover:bg-white"><GitBranch className="size-4" /> Import repository</button>
          <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/[0.05]"><Upload className="size-4 text-cyan-300" /> Upload files<span className="sr-only"> project, document, data, image, or code files</span><input type="file" accept=".zip,.tar,.gz,.tgz,.pdf,.docx,.csv,.png,.jpg,.jpeg,.webp,.gif,.tsx,.ts,.jsx,.js,.py,.md" onChange={handleUpload} className="sr-only" /></label>
        </div>
        {importError && <p role="alert" className="mt-4 flex items-center gap-2 text-xs text-rose-200"><span className="grid size-4 place-items-center rounded-full border border-rose-300/70 text-[10px]">!</span>{importError}</p>}
        {(importStatus || uploadedFile) && !importError && <p role="status" className="mt-4 flex items-center gap-2 text-xs text-cyan-200"><CheckCircle2 className="size-4" />{importStatus || uploadedFile}</p>}
        <p className="mt-4 text-xs text-slate-600">Supported: Next.js, React, Node.js, Python, static sites, APIs, workers, and monorepos. Max archive size: 250 MB.</p>
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-[#07101b] shadow-2xl shadow-cyan-950/20">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-cyan-300 text-[#08121f]"><Cpu className="size-5" /></span><div><p className="text-sm font-semibold text-white">Altavox Computer</p><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">Control plane / online</p></div></div>
          <div className="flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs text-cyan-200"><Activity className="size-3.5" /> All systems nominal</div>
        </div>
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r"><p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Good morning, operator</p><h2 className="mt-4 max-w-sm text-3xl font-medium tracking-tight text-white">Build the next system from one desk.</h2><p className="mt-4 max-w-md text-sm leading-7 text-slate-400">No jumping between disconnected provider dashboards. Plan, ship, observe, and improve with Altavox-native workflows.</p><div className="mt-7 grid gap-2">{actions.map(action => <button key={action} onClick={() => setActiveAction(action)} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.07] hover:text-white"><span>{action}</span><ArrowUpRight className="size-4 text-cyan-300" /></button>)}</div>{activeAction && <p role="status" className="mt-4 flex items-center gap-2 text-xs text-cyan-200"><CheckCircle2 className="size-4" />{activeAction} is ready in the Launchpad.</p>}</div>
          <div className="bg-[#0b1828] p-6 sm:p-8"><div className="flex items-center justify-between"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Live topology</p><h3 className="mt-2 text-lg font-medium text-white">Jaslyn Net production</h3></div><span className="rounded-full bg-emerald-300/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-200">healthy</span></div><div className="relative mt-8 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-4 sm:col-span-2"><div className="flex items-center gap-3"><Globe2 className="size-5 text-cyan-300" /><div><p className="text-sm font-medium text-white">Public gateway</p><p className="text-xs text-slate-400">jaslyn-net.altavox.space</p></div></div></div><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><Server className="size-5 text-cyan-300" /><p className="mt-3 text-sm font-medium text-white">Web service</p><p className="mt-1 text-xs text-slate-500">2 instances / auto scale</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><Database className="size-5 text-cyan-300" /><p className="mt-3 text-sm font-medium text-white">Primary data</p><p className="mt-1 text-xs text-slate-500">Postgres / encrypted</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><Bot className="size-5 text-cyan-300" /><p className="mt-3 text-sm font-medium text-white">Operations bot</p><p className="mt-1 text-xs text-slate-500">WhatsApp / connected</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><LockKeyhole className="size-5 text-cyan-300" /><p className="mt-3 text-sm font-medium text-white">Security</p><p className="mt-1 text-xs text-slate-500">Policy checks passing</p></div></div></div>
        </div>
      </div>
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{modules.map(({name, detail, icon: Icon}) => <article key={name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-300/35"><span className="grid size-10 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300"><Icon className="size-5" /></span><h2 className="mt-5 text-base font-medium text-white">{name}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p></article>)}</div>
      <div className="mt-16 grid gap-5 lg:grid-cols-3"><div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:col-span-2"><div className="flex items-center gap-2 text-cyan-300"><TerminalSquare className="size-4" /><span className="font-mono text-xs uppercase tracking-[0.2em]">Why it is different</span></div><h2 className="mt-4 max-w-2xl text-2xl font-medium text-white">Altavox Computer is the operating system for your digital company.</h2><div className="mt-7 grid gap-4 sm:grid-cols-2">{['Business context stays attached to every deployment.', 'Bots, websites, data, and infrastructure share one identity.', 'Every action has an audit trail and an owner.', 'Provider connections are optional modules, never your foundation.'].map(item => <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-1 size-4 shrink-0 text-cyan-300" />{item}</div>)}</div></div><div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.07] p-6 sm:p-8"><Sparkles className="size-5 text-cyan-300" /><h2 className="mt-5 text-xl font-medium text-white">Start with a brief.</h2><p className="mt-3 text-sm leading-6 text-slate-400">Describe what you want to build and Altavox turns it into a launch plan.</p><Link href="/launchpad" className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-[#08121f] hover:bg-white">Open Launchpad <ArrowUpRight className="size-4" /></Link></div></div>
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Project registry</p><h2 className="mt-3 text-2xl font-medium text-white">Your systems, ready for their next release.</h2></div><button type="button" onClick={() => setShowActivity((value) => !value)} className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/50 hover:text-white">{showActivity ? 'Hide activity' : 'View activity'}</button></div>
          {projects.length === 0 ? <p className="mt-5 text-sm text-slate-500">Imported projects will appear here with their source, deployment plan, and next action.</p> : <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <div key={`${project.name}-${index}`} className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-4"><div className="flex items-start justify-between gap-3"><div><p className="truncate text-sm font-medium text-white">{project.name}</p><p className="mt-1 text-xs text-slate-500">{project.source} import</p></div><span className="rounded-full bg-emerald-300/10 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-emerald-200">{project.status}</span></div><button type="button" onClick={() => setActiveAction(`Deploy ${project.name}`)} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-white">Open deployment plan <ArrowUpRight className="size-3.5" /></button></div>)}</div>}
          {showActivity && <div className="mt-6 border-t border-white/10 pt-5"><div className="grid gap-3 sm:grid-cols-3"><div><p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Latest event</p><p className="mt-2 text-sm text-white">Import intake completed</p></div><div><p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Security gate</p><p className="mt-2 text-sm text-emerald-200">Awaiting scan</p></div><div><p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Next action</p><p className="mt-2 text-sm text-cyan-200">Review deployment plan</p></div></div></div>}
        </div>
      </div>
      <div className="mt-16 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-cyan-300/[0.09] to-white/[0.03] p-6 sm:p-8 lg:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-5"><div><div className="flex items-center gap-2 text-cyan-300"><WandSparkles className="size-4" /><span className="font-mono text-xs uppercase tracking-[0.2em]">Altavox intelligence layer</span></div><h2 className="mt-4 text-2xl font-medium text-white">Operate your stack with natural language.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">Ask Computer to inspect, explain, secure, estimate, or prepare a release. Commands become auditable actions instead of chat that disappears.</p></div><div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-200"><BellRing className="size-3.5" /> Guardrails active</div></div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row"><label className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-white/10 bg-[#07101b] px-4 py-3"><Search className="size-4 shrink-0 text-cyan-300" /><span className="sr-only">Ask Altavox Computer</span><input value={commandQuery} onChange={(event) => setCommandQuery(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) runCommand() }} placeholder="Ask: scan my project or show spend" className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-600" /></label><button type="button" onClick={() => runCommand()} className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#08121f] transition hover:bg-white"><WandSparkles className="size-4" /> Run command</button></div>
          <div className="mt-4 flex flex-wrap gap-2">{['Scan project', 'Show costs', 'Open incidents', 'Deploy preview'].map((command) => <button key={command} type="button" onClick={() => { setCommandQuery(command); runCommand(command) }} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-200">{command}</button>)}</div>
          {commandResult && <p role="status" className="mt-5 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-3 text-sm leading-6 text-cyan-100">{commandResult}</p>}
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#0c1a2a] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-2 text-cyan-300"><Workflow className="size-4" /><span className="font-mono text-xs uppercase tracking-[0.2em]">Autonomous delivery</span></div><span className="rounded-full bg-emerald-300/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-200">policy approved</span></div>
          <h2 className="mt-4 text-2xl font-medium text-white">Ship safely without slowing down.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Altavox Computer turns every release into a controlled workflow: preview, test, scan, approve, deploy, and observe.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-5">{['Preview','Test','Scan','Approve','Live'].map((step, index) => <div key={step} className="relative"><div className="flex items-center gap-2"><span className={`grid size-8 place-items-center rounded-full text-xs font-semibold ${index < 4 ? 'bg-cyan-300 text-[#08121f]' : 'border border-cyan-300/40 text-cyan-200'}`}>{index + 1}</span><span className="text-xs text-slate-300">{step}</span></div>{index < 4 && <span className="absolute left-8 top-4 hidden h-px w-full bg-cyan-300/30 sm:block" />}</div>)}</div>
        </div>
        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.07] p-6 sm:p-8"><Radar className="size-5 text-cyan-300" /><h2 className="mt-5 text-xl font-medium text-white">Signal Center</h2><p className="mt-3 text-sm leading-6 text-slate-400">One feed for incidents, security drift, spend anomalies, and performance regressions.</p><div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-xs text-slate-500">Open signals</span><span className="text-2xl font-medium text-white">02</span></div><Link href="/deployments" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white">Review signals <ArrowUpRight className="size-4" /></Link></div>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[{ icon: Code2, title: 'Native runtime', copy: 'Build APIs, workers, cron jobs, and edge functions in one workspace.' }, { icon: ShieldCheck, title: 'Security posture', copy: 'Secrets, access rules, audit logs, and automated threat checks.' }, { icon: BarChart3, title: 'FinOps cockpit', copy: 'See unit cost, usage trends, and budget guardrails before surprises.' }, { icon: KeyRound, title: 'Identity graph', copy: 'Connect people, services, bots, and permissions with one identity model.' }].map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><Icon className="size-5 text-cyan-300" /><h3 className="mt-4 text-sm font-medium text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{copy}</p></article>)}
      </div>
      <div className="mt-16 rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.08] to-white/[0.03] p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Beyond chat</p><h2 className="mt-3 max-w-2xl text-2xl font-medium text-white">One intelligence layer for the whole build lifecycle.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">Altavox Computer combines the strongest ideas from modern AI workspaces with a native control plane for real software delivery.</p></div><span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-cyan-200">8 native capabilities</span></div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{advancedFeatures.map(({ icon: Icon, title, detail }) => <article key={title} className="rounded-2xl border border-white/10 bg-[#07101b]/70 p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/40"><span className="grid size-9 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300"><Icon className="size-4" /></span><h3 className="mt-4 text-sm font-medium text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p></article>)}</div>
      </div>
      <div className="mt-16 flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#0c1a2a] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"><div className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300"><Box className="size-5" /></span><div><h2 className="text-lg font-medium text-white">One home for every system you own.</h2><p className="mt-1 text-sm text-slate-400">Altavox Computer is built to grow with your operations.</p></div></div><Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white">Talk to Altavox <ArrowUpRight className="size-4" /></Link></div>
    </section>
  </PageFrame>
}
