'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  Activity,
  Zap,
  Server,
  Network,
  Database,
  Layers,
  Copy,
  Check,
  ShieldCheck,
  Info
} from 'lucide-react'

type TabType = 'routeros' | 'sims' | 'cloud'

export function LiveTerminalSandbox() {
  const [activeTab, setActiveTab] = useState<TabType>('routeros')
  const [isRunning, setIsRunning] = useState(false)
  const [copied, setCopied] = useState(false)

  const [routerLogs, setRouterLogs] = useState<string[]>([
    '[2026-10-29 10:45:01] [INFO] MikroTik CCR2004 socket connected via RouterOS API (tls=true, port=8729)',
    '[2026-10-29 10:45:02] [SYNC] Loaded 2,418 active PPPoE interface sessions across 4 distribution towers',
    '[2026-10-29 10:45:04] [NET] Core gateway latency: 3.4ms | Packet loss: 0.00% | BGP status: ESTABLISHED',
    '[2026-10-29 10:45:05] [READY] Awaiting automated M-Pesa IPN payment webhooks or manual operator commands...'
  ])

  const [simsLogs, setSimsLogs] = useState<string[]>([
    '[2026-10-29 10:45:01] [SIMS] Connected to Sammena PostgreSQL 16 relational ledger database (pool=20)',
    '[2026-10-29 10:45:02] [RECORDS] 852 student profiles loaded · Current term: Term 3 Final Examinations',
    '[2026-10-29 10:45:03] [AUDIT] Fee ledger balance verified: 98.6% reconciliation match against bank exports',
    '[2026-10-29 10:45:05] [READY] Ready to compile gradebook transcripts or dispatch automated parent balance SMS.'
  ])

  const [cloudLogs, setCloudLogs] = useState<string[]>([
    '[2026-10-29 10:45:01] [FABRIC] Altavox Nexora Cloud Runtime initialized (Ubuntu 24.04 LTS / Docker v27.1)',
    '[2026-10-29 10:45:02] [HEALTH] 14 microservice containers running in isolated namespaces (CPU: 12%, RAM: 24%)',
    '[2026-10-29 10:45:03] [EDGE] Cloudflare zero-trust tunnel active · SSL wildcard *.altavox.space valid',
    '[2026-10-29 10:45:05] [READY] Production cluster healthy with 99.99% blue/green rollout readiness.'
  ])

  function simulateRouterPayment() {
    setIsRunning(true)
    const timestamp = new Date().toLocaleTimeString()
    const newEvents = [
      `[${timestamp}] [WEBHOOK] <<< Incoming M-Pesa IPN: BillRef="ACC-7742" | Amount=TZS 45,000 | TransID=QJK88291X`,
      `[${timestamp}] [AUTH] Verified Safaricom/Vodacom HMAC-SHA256 signature (valid=true)`,
      `[${timestamp}] [ROUTEROS] Executing: /queue/simple/set [find name="sub-7742"] max-limit=25M/25M burst-limit=35M/35M`,
      `[${timestamp}] [SUCCESS] Account 7742 provisioned! Connection resumed without TCP session drop (latency: 3.8ms)`
    ]

    let i = 0
    const interval = setInterval(() => {
      if (i < newEvents.length) {
        setRouterLogs((prev) => [...prev, newEvents[i]])
        i++
      } else {
        clearInterval(interval)
        setIsRunning(false)
      }
    }, 450)
  }

  function simulateSimsCompilation() {
    setIsRunning(true)
    const timestamp = new Date().toLocaleTimeString()
    const newEvents = [
      `[${timestamp}] [TASK] Batch PDF gradebook compilation requested for Grade 7 (42 students)`,
      `[${timestamp}] [COMPUTE] Calculating GPA, percentile rankings, and automated teacher remarks`,
      `[${timestamp}] [RENDER] Compiling 42 high-resolution tamper-evident PDF transcripts with school seal`,
      `[${timestamp}] [DISPATCH] PDFs uploaded to secure student portal & balance alert SMS queued (status=COMPLETE)`
    ]

    let i = 0
    const interval = setInterval(() => {
      if (i < newEvents.length) {
        setSimsLogs((prev) => [...prev, newEvents[i]])
        i++
      } else {
        clearInterval(interval)
        setIsRunning(false)
      }
    }, 450)
  }

  function simulateCloudHealthCheck() {
    setIsRunning(true)
    const timestamp = new Date().toLocaleTimeString()
    const newEvents = [
      `[${timestamp}] [PROBE] Initiating multi-region endpoint health check from 4 probe locations`,
      `[${timestamp}] [LATENCY] Dar es Salaam: 4ms | Nairobi: 14ms | Frankfurt: 98ms | Ashburn: 122ms`,
      `[${timestamp}] [POSTGRES] Checking table row constraints and Drizzle ORM migration status: IN_SYNC`,
      `[${timestamp}] [VERIFIED] All 14 services report 100% operational status with zero packet degradation.`
    ]

    let i = 0
    const interval = setInterval(() => {
      if (i < newEvents.length) {
        setCloudLogs((prev) => [...prev, newEvents[i]])
        i++
      } else {
        clearInterval(interval)
        setIsRunning(false)
      }
    }, 450)
  }

  function currentLogs() {
    if (activeTab === 'routeros') return routerLogs
    if (activeTab === 'sims') return simsLogs
    return cloudLogs
  }

  function handleCopy() {
    navigator.clipboard.writeText(currentLogs().join('\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function handleReset() {
    if (activeTab === 'routeros') {
      setRouterLogs([
        '[10:45:01] [INFO] MikroTik CCR2004 socket connected via RouterOS API (tls=true, port=8729)',
        '[10:45:02] [SYNC] Loaded 2,418 active PPPoE interface sessions across 4 distribution towers',
        '[10:45:04] [READY] Ready for M-Pesa IPN payment simulation...'
      ])
    } else if (activeTab === 'sims') {
      setSimsLogs([
        '[10:45:01] [SIMS] Connected to Sammena PostgreSQL 16 database (pool=20)',
        '[10:45:02] [RECORDS] 852 student profiles loaded · Ready for gradebook batch run.'
      ])
    } else {
      setCloudLogs([
        '[10:45:01] [FABRIC] Altavox Nexora Cloud Runtime initialized',
        '[10:45:02] [HEALTH] 14 containers active · All systems operational.'
      ])
    }
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#061424] text-slate-200 overflow-hidden shadow-2xl">
      {/* Top Bar with Tabs and Status */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-[#030d17] px-4 py-3 gap-3">
        <div className="flex items-center gap-2">
          <span className="flex size-3 rounded-full bg-rose-500" />
          <span className="flex size-3 rounded-full bg-amber-500" />
          <span className="flex size-3 rounded-full bg-emerald-500" />
          <span className="ml-2 font-mono text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Terminal className="size-3.5 text-[#f26522]" />
            altavox-systems-live-console
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('routeros')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition font-semibold cursor-pointer ${
              activeTab === 'routeros'
                ? 'bg-[#f26522] text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Network className="size-3.5" />
            <span>Jaslyn Net RouterOS</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('sims')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition font-semibold cursor-pointer ${
              activeTab === 'sims'
                ? 'bg-[#f26522] text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="size-3.5" />
            <span>Sammena SIMS</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cloud')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition font-semibold cursor-pointer ${
              activeTab === 'cloud'
                ? 'bg-[#f26522] text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Server className="size-3.5" />
            <span>Nexora Cloud & DB</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:bg-white/10 transition cursor-pointer"
            title="Copy logs"
          >
            {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
            <span>{copied ? 'Copied' : 'Copy Logs'}</span>
          </button>
          <button
            onClick={handleReset}
            className="rounded-lg border border-white/10 bg-white/5 p-1 text-slate-400 hover:text-white transition cursor-pointer"
            title="Clear and reset terminal"
          >
            <RotateCcw className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Screen */}
      <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed max-h-72 min-h-60 overflow-y-auto space-y-1.5 bg-[#030d17]/80 selection:bg-[#f26522] selection:text-white">
        {currentLogs().map((log, idx) => {
          const isHighlight = log.includes('[WEBHOOK]') || log.includes('[SUCCESS]') || log.includes('[RENDER]') || log.includes('[VERIFIED]')
          const isWarn = log.includes('[SYNC]') || log.includes('[AUTH]')
          return (
            <motion.div
              key={`${idx}-${log.slice(0, 20)}`}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`flex items-start gap-2 ${
                isHighlight ? 'text-emerald-300 font-semibold' : isWarn ? 'text-cyan-300' : 'text-slate-300'
              }`}
            >
              <span className="text-[#f26522] shrink-0 font-bold">›</span>
              <span className="break-all">{log}</span>
            </motion.div>
          )
        })}

        {isRunning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-orange-400 pt-1 animate-pulse"
          >
            <span className="text-[#f26522]">›</span>
            <span>Processing operational protocol command...</span>
          </motion.div>
        )}
      </div>

      {/* Interactive Trigger Controls Footer */}
      <div className="border-t border-white/10 bg-[#071d33] p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-2 rounded-full bg-emerald-400 animate-ping" />
          <p className="text-xs text-slate-300">
            Interactive Test Sandbox · Click a trigger button to simulate real-world system traffic:
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {activeTab === 'routeros' && (
            <button
              onClick={simulateRouterPayment}
              disabled={isRunning}
              className="flex items-center gap-2 rounded-xl bg-[#f26522] px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-[#e05312] transition disabled:opacity-50 cursor-pointer"
            >
              <Play className="size-3.5 fill-current" />
              <span>Simulate M-Pesa IPN Payment & Queue Refresh</span>
            </button>
          )}

          {activeTab === 'sims' && (
            <button
              onClick={simulateSimsCompilation}
              disabled={isRunning}
              className="flex items-center gap-2 rounded-xl bg-[#f26522] px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-[#e05312] transition disabled:opacity-50 cursor-pointer"
            >
              <Play className="size-3.5 fill-current" />
              <span>Compile Grade 7 Report Card PDFs</span>
            </button>
          )}

          {activeTab === 'cloud' && (
            <button
              onClick={simulateCloudHealthCheck}
              disabled={isRunning}
              className="flex items-center gap-2 rounded-xl bg-[#f26522] px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-[#e05312] transition disabled:opacity-50 cursor-pointer"
            >
              <Play className="size-3.5 fill-current" />
              <span>Run Multi-Region Health Diagnostic</span>
            </button>
          )}

          <a
            href="tel:+255750227073"
            className="flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition"
          >
            <span>Ask Lead Engineer</span>
          </a>
        </div>
      </div>
    </div>
  )
}
