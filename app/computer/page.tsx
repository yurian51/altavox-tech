'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BellRing,
  Bot,
  Box,
  CheckCircle2,
  Cloud,
  Code2,
  Command,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  KeyRound,
  Link2,
  LockKeyhole,
  Network,
  Play,
  Radar,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Upload,
  WandSparkles,
  Workflow
} from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { OperationsStatus } from '@/components/operations-status'
import { LiveTerminalSandbox } from '@/components/live-terminal-sandbox'

const modules = [
  { name: 'Workspace OS', detail: 'One visual workspace for projects, environments, deployments, and team permissions.', icon: Command },
  { name: 'Agent Room', detail: 'Design, test, supervise, and replay bot workflows before they reach a customer.', icon: Bot },
  { name: 'Service Fabric', detail: 'Connect web apps, APIs, workers, databases, storage, and events as one system.', icon: Network },
  { name: 'Data Vault', detail: 'Manage Postgres, files, backups, secrets, and access policies from one control plane.', icon: Database },
]

const actions = ['Create a project', 'Deploy a website', 'Deploy a bot', 'Open system map']

const researchedCapabilities = [
  { label: 'Task graph', value: 'Plan → execute → verify', detail: 'Breaks multi-step work into inspectable stages with explicit completion evidence.' },
  { label: 'Sandbox runs', value: 'Isolated execution', detail: 'Tests and previews run separately from production with a rollback checkpoint.' },
  { label: 'Model router', value: 'Best model per task', detail: 'Balances reasoning quality, latency, privacy, and cost for each operation.' },
  { label: 'Evidence trail', value: 'Sources + artifacts', detail: 'Keeps citations, changed files, test output, and approvals attached to the result.' },
]

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

const ideFilesContent: Record<string, string> = {
  'page.tsx': `export default function Computer() {\n  return (\n    <WorkspaceOS>\n      <LiveTopology service="jaslyn-net" />\n      <DeveloperCockpit defaultTab="terminal" />\n      <AuditStream filter="security" />\n    </WorkspaceOS>\n  )\n}`,
  'layout.tsx': `export const metadata: Metadata = {\n  title: 'Altavox Tech',\n  description: 'Technology built for real work.'\n}\n\nexport default function RootLayout({ children }) {\n  return <html><body className="antialiased">{children}</body></html>\n}`,
  'site-shell.tsx': `export function SiteHeader() {\n  return (\n    <header className="sticky top-0 z-40 bg-white/95">\n      <Brand wordmark="ALTAVOX TECH" />\n      <NavLinks />\n      <QuickSearch shortcut="Cmd+K" />\n    </header>\n  )\n}`,
  'schema.ts': `export const inquiries = pgTable('inquiries', {\n  id: uuid('id').primaryKey(),\n  name: text('name').notNull(),\n  email: text('email').notNull(),\n  service: text('service'),\n  status: text('status').default('new'),\n  createdAt: timestamp('created_at').defaultNow()\n})`
}

interface TopologyDetail {
  title: string
  host: string
  status: string
  uptime: string
  latency: string
  details: string
}

const topologyData: Record<string, TopologyDetail> = {
  gateway: {
    title: 'Public Gateway',
    host: 'jaslyn-net.altavox.space',
    status: 'Healthy',
    uptime: '99.99%',
    latency: '22ms',
    details: 'Cloudflare edge reverse-proxy with automated TLS 1.3 termination, HTTP/2, and rate limiting.'
  },
  web: {
    title: 'Web Service (Core UI)',
    host: 'core-web.internal:3000',
    status: 'Operational',
    uptime: '99.95%',
    latency: '4ms',
    details: 'Next.js 16 standalone container with server components, streaming SSR, and zero client layout shifts.'
  },
  db: {
    title: 'Primary Database',
    host: 'pg-primary.internal:5432',
    status: 'Encrypted',
    uptime: '100.0%',
    latency: '1.8ms',
    details: 'PostgreSQL 16 relational store with Drizzle ORM, connection pool (5/20 max), and automated hourly snapshots.'
  },
  bot: {
    title: 'Operations Bot Gateway',
    host: 'bot-adapter.internal:8080',
    status: 'Connected',
    uptime: '99.92%',
    latency: '82ms',
    details: 'WhatsApp Business API & Telegram bot webhook handler for automated subscriber payment alerts.'
  },
  security: {
    title: 'Security & Access Vault',
    host: 'policy-guard.internal',
    status: 'Enforced',
    uptime: '100.0%',
    latency: '0.8ms',
    details: 'Role-based access control (RBAC), cookie hygiene, and tamper-evident audit trail log stream.'
  }
}

export default function ComputerPage() {
  const [activeAction, setActiveAction] = useState('')
  const [repository, setRepository] = useState('')
  const [importStatus, setImportStatus] = useState('')
  const [uploadedFile, setUploadedFile] = useState('')
  const [importError, setImportError] = useState('')
  const [isImporting, setIsImporting] = useState(false)
  type Project = { name: string; source: string; status: string; detail?: string; id: string; branch?: string; url?: string; action?: string }
  const [projects, setProjects] = useState<Project[]>([])
  const [showActivity, setShowActivity] = useState(false)
  const [commandQuery, setCommandQuery] = useState('')
  const [commandResult, setCommandResult] = useState('')
  const [activity, setActivity] = useState<string[]>([
    'Dev server running on 0.0.0.0:3000',
    'Postgres mock adapter initialized',
    'Workspace OS connected'
  ])
  const [deploymentState, setDeploymentState] = useState<'idle' | 'running' | 'ready'>('idle')
  const [selectedProject, setSelectedProject] = useState('')
  const [selectedModel, setSelectedModel] = useState('Auto-route')
  const [approvalState, setApprovalState] = useState<'pending' | 'approved'>('pending')
  const [workspaceTab, setWorkspaceTab] = useState<'cli' | 'ide' | 'terminal'>('cli')
  const [terminalCommand, setTerminalCommand] = useState('altavox status')
  const [terminalOutput, setTerminalOutput] = useState(
    'Altavox Terminal v2.4 initialized.\nType "help" or run "altavox status" to inspect your systems.'
  )
  const [commandLifecycle, setCommandLifecycle] = useState<'idle' | 'queued' | 'blocked'>('idle')
  const [selectedTopologyKey, setSelectedTopologyKey] = useState<string>('gateway')
  const [activeIdeFile, setActiveIdeFile] = useState<string>('page.tsx')

  function recordActivity(message: string) {
    setActivity((current) => [message, ...current].slice(0, 8))
  }

  function handleTerminalRun(cmdToRun = terminalCommand) {
    const trimmed = cmdToRun.trim()
    if (!trimmed) return

    const lower = trimmed.toLowerCase()
    recordActivity(`Terminal: ${trimmed}`)

    if (lower === 'clear') {
      setTerminalOutput('')
      return
    }

    if (lower === 'help') {
      setTerminalOutput((prev) => `${prev}\n$ ${trimmed}\n\nAvailable Altavox CLI commands:\n  altavox status          - View workspace and cluster status\n  altavox scan            - Run security, policy, and dependency checks\n  altavox dev             - Inspect local dev server configuration\n  altavox deploy --preview- Prepare preview deployment\n  altavox logs            - Display recent system operational events\n  altavox ping            - Test reachability of gateway or router\n  clear                   - Clear screen`)
      return
    }

    if (lower === 'altavox status') {
      setCommandLifecycle('queued')
      setTerminalOutput((prev) => `${prev}\n$ ${trimmed}\n[Altavox OS] Workspace Status: ONLINE\n- Runtime: Node.js 22 LTS (Standalone, 0.0.0.0:3000)\n- Active Systems: Jaslyn Net (2 instances), Sammena SIMS (1 instance)\n- Database: PostgreSQL (Drizzle ORM active, in-memory resilient fallback)\n- Gateway: jaslyn-net.altavox.space (22ms latency)\n- Security Checks: All 4 gates passing (0 blocking policies)`)
      return
    }

    if (lower.startsWith('altavox scan')) {
      setCommandLifecycle('queued')
      setTerminalOutput((prev) => `${prev}\n$ ${trimmed}\n[1/4] Scanning dependencies... OK (0 vulnerabilities)\n[2/4] Verifying secret vaults... OK (Clean, no leaks detected)\n[3/4] Type-checking contracts... OK (tsc --noEmit passed)\n[4/4] Validating RBAC policies... OK\nVerification completed: System is ready for safe release.`)
      return
    }

    if (lower.startsWith('altavox dev')) {
      setCommandLifecycle('queued')
      setTerminalOutput((prev) => `${prev}\n$ ${trimmed}\nLocal development server: RUNNING\nPort: 3000 | Host: 0.0.0.0\nFramework: Next.js 16 (Turbopack)\nOutput: standalone`)
      return
    }

    if (lower.startsWith('altavox deploy')) {
      setCommandLifecycle('queued')
      setTerminalOutput((prev) => `${prev}\n$ ${trimmed}\nStarting isolated preview build...\n✓ Standalone container packaged\n✓ Static manifests compiled\n✓ Rollback snapshot #4932 created\nPreview URL: https://preview-altavox-77b.altavox.space\nAwaiting operator sign-off before production promotion.`)
      return
    }

    if (lower.startsWith('altavox logs')) {
      setCommandLifecycle('queued')
      const timeStr = new Date().toLocaleTimeString()
      setTerminalOutput((prev) => `${prev}\n$ ${trimmed}\n[${timeStr}] INFO [http] GET /api/operations/status 200 (8ms)\n[${timeStr}] INFO [auth] Session verified for admin\n[${timeStr}] INFO [routeros] PPPoE sync complete (2400 active sessions)\n[${timeStr}] INFO [health] Cluster uptime 99.98% over last 30 days`)
      return
    }

    if (lower.startsWith('altavox ping') || lower.startsWith('ping')) {
      setCommandLifecycle('queued')
      setTerminalOutput((prev) => `${prev}\n$ ${trimmed}\nPING jaslyn-net.altavox.space (102.164.12.8): 56 data bytes\n64 bytes from 102.164.12.8: icmp_seq=0 ttl=58 time=21.4 ms\n64 bytes from 102.164.12.8: icmp_seq=1 ttl=58 time=22.1 ms\n64 bytes from 102.164.12.8: icmp_seq=2 ttl=58 time=20.9 ms\n--- jaslyn-net.altavox.space statistics ---\n3 packets transmitted, 3 received, 0% packet loss, rtt avg 21.46 ms`)
      return
    }

    setTerminalOutput((prev) => `${prev}\n$ ${trimmed}\nCommand dispatched to operator execution timeline.\nType "help" to inspect all available CLI commands.`)
  }

  function prepareDeployment(projectName: string) {
    setSelectedProject(projectName)
    setDeploymentState('running')
    setActiveAction(`Deploy ${projectName}`)
    recordActivity(`Deployment plan opened for ${projectName}`)
    window.setTimeout(() => {
      setDeploymentState('ready')
      setCommandResult(`Deployment plan ready for ${projectName}: preview, test, scan, approval, and release gates are configured.`)
      recordActivity(`Deployment plan ready for ${projectName}`)
    }, 700)
  }

  async function importRepository() {
    const value = repository.trim()
    setImportError('')
    setImportStatus('')

    if (!value) {
      setImportError('Enter a GitHub repository URL to continue.')
      return
    }

    try {
      const url = new URL(value.startsWith('http') ? value : `https://${value}`)
      const parts = url.pathname.split('/').filter(Boolean)
      if (url.hostname !== 'github.com' || parts.length < 2) throw new Error('invalid repository')
      const owner = parts[0]
      const repo = parts[1].replace(/\.git$/, '')
      setIsImporting(true)
      setImportStatus(`Connecting directly to GitHub: ${owner}/${repo}…`)
      const response = await fetch(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`, {
        headers: { Accept: 'application/vnd.github+json' }
      })
      if (!response.ok) throw new Error(response.status === 404 ? 'not found' : 'github unavailable')
      const data = await response.json() as { full_name: string; description?: string; default_branch: string; language?: string; html_url: string }
      setProjects((current) => [
        {
          id: `github-${data.full_name}`,
          name: data.full_name,
          source: 'GitHub direct',
          status: 'Connected',
          detail: `${data.language ?? 'Codebase'} · ${data.default_branch}`,
          branch: data.default_branch,
          url: data.html_url,
          action: 'Analyze stack'
        },
        ...current.filter((project) => project.id !== `github-${data.full_name}`)
      ])
      setImportStatus(`Connected to ${data.full_name}. Repository metadata is ready for the deployment plan.`)
      recordActivity(`GitHub repository connected: ${data.full_name}`)
    } catch (error) {
      setImportError(error instanceof Error && error.message === 'not found' ? 'Repository not found or private. Public repositories connect instantly; private repositories need GitHub sign-in.' : 'Use a valid public GitHub URL, for example github.com/owner/project.')
      setImportStatus('')
    } finally {
      setIsImporting(false)
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
      setCommandResult('Signal Center opened: 0 blocking outages. All link reachability tests passing.')
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
    const projectName = file.name.replace(/\.(zip|tar|gz|tgz)$/i, '')
    setUploadedFile(file.name)
    const projectId = `upload-${file.name}-${file.lastModified}`
    setProjects((current) => [
      {
        id: projectId,
        name: projectName,
        source: 'Upload',
        status: 'Plan ready',
        detail: `${file.type || 'Project asset'} · ${Math.ceil(file.size / 1024)} KB`,
        action: 'Analyze files'
      },
      ...current.filter((project) => project.id !== projectId)
    ])
    setImportStatus(`Upload ready: ${file.name} (${Math.ceil(file.size / 1024)} KB)`)
    recordActivity(`Upload intake completed: ${file.name}`)
  }

  function runProjectAction(project: Project) {
    const action = project.action ?? 'Analyze stack'
    const nextStatus = action === 'Analyze stack' || action === 'Analyze files' ? 'Analyzed' : action === 'Create preview' ? 'Preview ready' : 'Plan ready'
    setProjects((current) =>
      current.map((item) =>
        item.id === project.id
          ? {
              ...item,
              status: nextStatus,
              action: nextStatus === 'Analyzed' ? 'Create preview' : nextStatus === 'Preview ready' ? 'Deploy release' : 'Analyze stack'
            }
          : item
      )
    )
    setCommandResult(`${action} completed for ${project.name}. ${nextStatus === 'Preview ready' ? 'A preview environment is ready for review.' : 'The next controlled release action is now available.'}`)
    setShowActivity(true)
    recordActivity(`${action} completed: ${project.name}`)
  }

  const activeTopology = topologyData[selectedTopologyKey] || topologyData.gateway

  return (
    <PageFrame
      eyebrow="Altavox Computer"
      title="Your digital operations & developer control plane."
      intro="A native control plane for building, deploying, operating, and monitoring systems. Altavox Computer gives every project a home, every service an observable role, and every release a verified path."
    >
      <section className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Project Intake Banner */}
        <div className="mb-8 rounded-2xl border border-white/15 bg-gradient-to-r from-[#07294d] to-[#093563] p-6 sm:p-8 shadow-xl text-white">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="max-w-2xl">
              <span className="rounded-full bg-[#f26522] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white font-bold">
                Repository & Archive Intake
              </span>
              <h2 className="mt-3 text-2xl font-bold text-white">Import a Project Directly Into Altavox.</h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                Paste a GitHub repository or upload a project archive. Altavox inspects the stack, configures the environment, and generates an automated release plan.
              </p>
            </div>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white">
              Sovereign Runtime
            </span>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_auto_auto]">
            <label className="flex items-center gap-3 rounded-xl border border-white/15 bg-black/20 px-4 py-3">
              <Link2 className="size-4 shrink-0 text-[#f26522]" />
              <span className="sr-only">GitHub repository URL</span>
              <input
                value={repository}
                onChange={(event) => setRepository(event.target.value)}
                placeholder="https://github.com/owner/project"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
              />
            </label>
            <button
              type="button"
              onClick={importRepository}
              disabled={isImporting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f26522] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#d95316] disabled:cursor-wait disabled:opacity-60 shadow-sm"
            >
              <GitBranch className="size-4" /> {isImporting ? 'Connecting…' : 'Import repository'}
            </button>
            <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/10">
              <Upload className="size-4 text-[#f26522]" /> Upload files
              <input
                type="file"
                accept=".zip,.tar,.gz,.tgz,.pdf,.docx,.csv,.png,.jpg,.jpeg,.webp,.gif,.tsx,.ts,.jsx,.js,.py,.md"
                onChange={handleUpload}
                className="sr-only"
              />
            </label>
          </div>

          {importError && (
            <p role="alert" className="mt-4 flex items-center gap-2 text-xs text-rose-300">
              <span className="grid size-4 place-items-center rounded-full border border-rose-300 text-[10px]">!</span>
              {importError}
            </p>
          )}

          {(importStatus || uploadedFile) && !importError && (
            <p role="status" className="mt-4 flex items-center gap-2 text-xs text-emerald-300">
              <CheckCircle2 className="size-4" />
              {importStatus || uploadedFile}
            </p>
          )}
        </div>

        {/* Live Topology & Operator Desk */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4 bg-slate-50">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-orange-100 text-[#f26522]">
                <Cpu className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#07294d]">Altavox Computer Console</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">Status: Active / 0.0.0.0:3000</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700 font-semibold">
              <Activity className="size-3.5" /> Core Systems Online
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left: Quick Actions */}
            <div className="border-b border-slate-100 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#f26522] font-bold">Operator Deck</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#07294d]">
                Operate systems from one interface.
              </h2>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                Directly orchestrate deployment pipelines, verify security gates, and monitor topology components.
              </p>

              <div className="mt-6 grid gap-2">
                {actions.map((action) => (
                  <button
                    type="button"
                    key={action}
                    onClick={() => {
                      setActiveAction(action)
                      recordActivity(`Action triggered: ${action}`)
                    }}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.07] hover:text-white"
                  >
                    <span>{action}</span>
                    <ArrowUpRight className="size-4 text-cyan-300" />
                  </button>
                ))}
              </div>

              {activeAction && (
                <p role="status" className="mt-4 flex items-center gap-2 text-xs text-cyan-200">
                  <CheckCircle2 className="size-4" />
                  {activeAction} is active in current session.
                </p>
              )}
            </div>

            {/* Right: Interactive Topology Map */}
            <div className="bg-[#0b1828] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Live Topology Inspector</p>
                  <h3 className="mt-1 text-lg font-bold text-white">Jaslyn Net Production Cluster</h3>
                </div>
                <span className="rounded-full bg-emerald-300/10 px-2.5 py-1 font-mono text-[10px] text-emerald-200">
                  Click a node to inspect
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setSelectedTopologyKey('gateway')}
                  className={`rounded-2xl border p-4 text-left transition sm:col-span-2 ${
                    selectedTopologyKey === 'gateway'
                      ? 'border-cyan-300 bg-cyan-300/15'
                      : 'border-white/10 bg-white/[0.04] hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Globe2 className="size-5 text-cyan-300" />
                    <div>
                      <p className="text-sm font-semibold text-white">Public Gateway</p>
                      <p className="text-xs text-slate-400">jaslyn-net.altavox.space</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTopologyKey('web')}
                  className={`rounded-2xl border p-4 text-left transition ${
                    selectedTopologyKey === 'web'
                      ? 'border-cyan-300 bg-cyan-300/15'
                      : 'border-white/10 bg-white/[0.04] hover:border-white/30'
                  }`}
                >
                  <Server className="size-5 text-cyan-300" />
                  <p className="mt-2 text-sm font-semibold text-white">Web Service</p>
                  <p className="text-xs text-slate-400">2 instances / auto-scale</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTopologyKey('db')}
                  className={`rounded-2xl border p-4 text-left transition ${
                    selectedTopologyKey === 'db'
                      ? 'border-cyan-300 bg-cyan-300/15'
                      : 'border-white/10 bg-white/[0.04] hover:border-white/30'
                  }`}
                >
                  <Database className="size-5 text-cyan-300" />
                  <p className="mt-2 text-sm font-semibold text-white">Primary Data</p>
                  <p className="text-xs text-slate-400">PostgreSQL / encrypted</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTopologyKey('bot')}
                  className={`rounded-2xl border p-4 text-left transition ${
                    selectedTopologyKey === 'bot'
                      ? 'border-cyan-300 bg-cyan-300/15'
                      : 'border-white/10 bg-white/[0.04] hover:border-white/30'
                  }`}
                >
                  <Bot className="size-5 text-cyan-300" />
                  <p className="mt-2 text-sm font-semibold text-white">Operations Bot</p>
                  <p className="text-xs text-slate-400">WhatsApp & Telegram</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTopologyKey('security')}
                  className={`rounded-2xl border p-4 text-left transition ${
                    selectedTopologyKey === 'security'
                      ? 'border-cyan-300 bg-cyan-300/15'
                      : 'border-white/10 bg-white/[0.04] hover:border-white/30'
                  }`}
                >
                  <LockKeyhole className="size-5 text-cyan-300" />
                  <p className="mt-2 text-sm font-semibold text-white">Security & Vault</p>
                  <p className="text-xs text-slate-400">Policy checks passing</p>
                </button>
              </div>

              {/* Node Inspector Output */}
              <div className="mt-5 rounded-xl border border-cyan-300/20 bg-[#07101b] p-4 text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-bold text-cyan-200">{activeTopology.title}</span>
                  <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
                    <span>Uptime: <strong className="text-white">{activeTopology.uptime}</strong></span>
                    <span>Latency: <strong className="text-emerald-400">{activeTopology.latency}</strong></span>
                  </div>
                </div>
                <p className="mt-2 text-slate-300">{activeTopology.details}</p>
                <p className="mt-1 font-mono text-[10px] text-slate-500">Internal address: {activeTopology.host}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Cockpit: CLI, IDE, Terminal */}
        <div className="mt-12 rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-[#07101b] to-[#0c1a2a] p-6 sm:p-8 shadow-xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Developer Cockpit</p>
              <h2 className="mt-2 text-2xl font-bold text-white">CLI, Cloud IDE, and Live Terminal.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Direct command surface for testing, inspecting source files, and executing release controls.
              </p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 font-mono text-[11px] text-emerald-200">
              <span className="size-2 rounded-full bg-emerald-400" /> Workspace Online
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#07101b]">
            {/* Tabs */}
            <div className="flex border-b border-white/10 p-2 gap-2">
              {(['cli', 'ide', 'terminal'] as const).map((tab) => (
                <button
                  type="button"
                  key={tab}
                  onClick={() => setWorkspaceTab(tab)}
                  className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                    workspaceTab === tab
                      ? 'bg-cyan-300 text-[#08121f]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {tab === 'cli' ? 'Altavox CLI' : tab === 'ide' ? 'Cloud IDE' : 'Interactive Terminal'}
                </button>
              ))}
            </div>

            {/* Tab 1: CLI Guide */}
            {workspaceTab === 'cli' && (
              <div className="grid gap-6 p-6 lg:grid-cols-[1fr_0.8fr]">
                <div>
                  <p className="font-mono text-xs text-cyan-300">$ altavox init --project current</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Bootstrap environments, sync repositories, run checks, and promote releases through a guarded command surface.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['altavox status', 'altavox dev', 'altavox scan', 'altavox deploy --preview', 'altavox logs', 'altavox ping'].map((cmd) => (
                      <button
                        type="button"
                        key={cmd}
                        onClick={() => {
                          setTerminalCommand(cmd)
                          setWorkspaceTab('terminal')
                          handleTerminalRun(cmd)
                        }}
                        className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-xs text-slate-300 hover:border-cyan-300/40 hover:text-cyan-200 transition"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">CLI Automation Capabilities</p>
                  <div className="mt-3 space-y-2 text-xs text-slate-300">
                    <p>• Automated dependency & security vulnerability scanning</p>
                    <p>• Isolated container sandboxing & preview URL generation</p>
                    <p>• PostgreSQL connection health & schema diff verification</p>
                    <p>• Direct MikroTik RouterOS API reachability probes</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Cloud IDE */}
            {workspaceTab === 'ide' && (
              <div className="grid gap-4 p-5 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">Explorer</p>
                  <div className="mt-3 space-y-1 font-mono text-xs text-slate-300">
                    <p className="text-cyan-200">▾ app/</p>
                    <button
                      type="button"
                      onClick={() => setActiveIdeFile('page.tsx')}
                      className={`block w-full text-left pl-4 py-1 rounded ${
                        activeIdeFile === 'page.tsx' ? 'bg-cyan-300/10 text-cyan-300 font-bold' : 'hover:text-white'
                      }`}
                    >
                      page.tsx
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveIdeFile('layout.tsx')}
                      className={`block w-full text-left pl-4 py-1 rounded ${
                        activeIdeFile === 'layout.tsx' ? 'bg-cyan-300/10 text-cyan-300 font-bold' : 'hover:text-white'
                      }`}
                    >
                      layout.tsx
                    </button>
                    <p className="text-cyan-200 pt-2">▾ components/</p>
                    <button
                      type="button"
                      onClick={() => setActiveIdeFile('site-shell.tsx')}
                      className={`block w-full text-left pl-4 py-1 rounded ${
                        activeIdeFile === 'site-shell.tsx' ? 'bg-cyan-300/10 text-cyan-300 font-bold' : 'hover:text-white'
                      }`}
                    >
                      site-shell.tsx
                    </button>
                    <p className="text-cyan-200 pt-2">▾ lib/db/</p>
                    <button
                      type="button"
                      onClick={() => setActiveIdeFile('schema.ts')}
                      className={`block w-full text-left pl-4 py-1 rounded ${
                        activeIdeFile === 'schema.ts' ? 'bg-cyan-300/10 text-cyan-300 font-bold' : 'hover:text-white'
                      }`}
                    >
                      schema.ts
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <p className="font-mono text-xs font-semibold text-cyan-200">{activeIdeFile}</p>
                    <span className="text-[11px] text-emerald-300 font-mono">TypeScript strict</span>
                  </div>
                  <pre className="mt-4 overflow-x-auto font-mono text-xs leading-6 text-slate-300">
                    <code>{ideFilesContent[activeIdeFile] || ideFilesContent['page.tsx']}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Tab 3: Interactive Terminal */}
            {workspaceTab === 'terminal' && (
              <div className="p-6">
                <div className="min-h-48 max-h-80 overflow-y-auto rounded-xl border border-white/10 bg-black/40 p-4">
                  <pre className="whitespace-pre-wrap font-mono text-xs leading-6 text-cyan-200">
                    {terminalOutput}
                  </pre>
                </div>

                <div className="mt-4 flex gap-2">
                  <input
                    aria-label="Terminal command"
                    value={terminalCommand}
                    onChange={(event) => setTerminalCommand(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handleTerminalRun()
                      }
                    }}
                    placeholder="Type a command (e.g. altavox status, altavox scan, help)..."
                    className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 font-mono text-xs text-white outline-none focus:border-cyan-300 placeholder:text-slate-600"
                  />
                  <button
                    type="button"
                    onClick={() => handleTerminalRun()}
                    className="rounded-lg bg-cyan-300 px-5 py-2.5 text-xs font-bold text-[#08121f] hover:bg-white transition"
                  >
                    Execute
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Live Multi-Cluster Telemetry Sandbox */}
        <div className="mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="inline-block rounded-full bg-[#f26522] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Multi-Cluster Sandbox
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-[#07294d]">
                Live Systems Runtime & Protocol Simulator
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                Direct interactive telemetry from active MikroTik RouterOS gateways, Sammena SIMS academic ledgers, and Nexora cloud runtimes.
              </p>
            </div>
            <a
              href="tel:+255750227073"
              className="text-xs font-bold text-[#f26522] hover:underline"
            >
              Direct Desk: +255 750 227 073 →
            </a>
          </div>
          <LiveTerminalSandbox />
        </div>

        {/* Database & Operations Status */}
        <div className="mt-12">
          <OperationsStatus />
        </div>
      </section>
    </PageFrame>
  )
}
