'use client'

import { useState } from 'react'
import {
  Sliders,
  Calculator,
  Zap,
  CheckCircle2,
  ArrowRight,
  Clock3,
  TrendingUp,
  Server,
  Network,
  ShieldCheck,
  Building2,
  PhoneCall,
  DollarSign
} from 'lucide-react'

type SectorType = 'isp' | 'school' | 'enterprise' | 'cloud'

export function ArchitectureCalculator({
  onSelectSetup
}: {
  onSelectSetup?: (summary: string) => void
}) {
  const [sector, setSector] = useState<SectorType>('isp')
  const [scale, setScale] = useState<number>(1200)
  const [tier, setTier] = useState<'standard' | 'high_availability' | 'carrier'>('high_availability')
  const [includeMPesa, setIncludeMPesa] = useState<boolean>(true)
  const [includeSMSAlerts, setIncludeSMSAlerts] = useState<boolean>(true)
  const [activeCopied, setActiveCopied] = useState(false)

  // Dynamic calculations based on scale and sector
  const calculations = {
    isp: {
      hoursSavedPerMonth: Math.round(scale * 0.12 + (includeMPesa ? 45 : 15)),
      reconciliationAccuracy: '99.98%',
      estimatedAnnualSavings: Math.round(scale * 14.5 + (tier === 'carrier' ? 4500 : 2200)),
      recommendedEngine: tier === 'carrier' ? 'MikroTik CCR2116 Dual-Socket Cloud Core' : 'MikroTik CCR2004 Cluster + Altavox Sync',
      specs: [
        'Sub-second M-Pesa IPN Webhook queue provision',
        'Automatic rate-limit burst enforcement',
        'RADIUS multi-NAS failover sync'
      ]
    },
    school: {
      hoursSavedPerMonth: Math.round(scale * 0.09 + (includeSMSAlerts ? 35 : 10)),
      reconciliationAccuracy: '100%',
      estimatedAnnualSavings: Math.round(scale * 11.2 + 1800),
      recommendedEngine: 'Sammena SIMS Cloud Instance + Automated Ledger Engine',
      specs: [
        'Single-click terminal report card compilation',
        'Automated parent fee arrears SMS broadcast',
        'Multi-term academic audit trail'
      ]
    },
    enterprise: {
      hoursSavedPerMonth: Math.round(scale * 0.15 + 60),
      reconciliationAccuracy: '99.99%',
      estimatedAnnualSavings: Math.round(scale * 22.0 + 5000),
      recommendedEngine: 'Altavox Enterprise API Gateway & Relational Vault',
      specs: [
        'Zero-downtime blue/green schema migration',
        'Strict PostgreSQL RBAC security boundaries',
        'Sub-5ms median API endpoint latency'
      ]
    },
    cloud: {
      hoursSavedPerMonth: Math.round(scale * 0.18 + 50),
      reconciliationAccuracy: '99.95%',
      estimatedAnnualSavings: Math.round(scale * 18.0 + 3500),
      recommendedEngine: 'Nexora Container Fabric & Edge Router Proxy',
      specs: [
        'Isolated customer sandbox environments',
        'Encrypted environment variable vault',
        'Automated TLS rotation & edge firewall'
      ]
    }
  }

  const current = calculations[sector]

  const sectorLabels = [
    { id: 'isp' as SectorType, label: 'ISP & MikroTik Billing', icon: Network, desc: 'Hotspots, PPPoE & M-Pesa' },
    { id: 'school' as SectorType, label: 'School SIMS & Academics', icon: Building2, desc: 'Fees, Gradebooks & SMS' },
    { id: 'enterprise' as SectorType, label: 'Enterprise Software & API', icon: Server, desc: 'Databases, RBAC & Systems' },
    { id: 'cloud' as SectorType, label: 'Cloud & Container DevOps', icon: ShieldCheck, desc: 'Docker, Microservices & SLA' },
  ]

  const setupSummary = `Sector: ${sector.toUpperCase()} · Scale: ${scale.toLocaleString()} active entities · Tier: ${tier} · M-Pesa: ${includeMPesa ? 'Yes' : 'No'} · SMS: ${includeSMSAlerts ? 'Yes' : 'No'} · Engine: ${current.recommendedEngine}`

  function handleAction() {
    if (onSelectSetup) {
      onSelectSetup(setupSummary)
    } else {
      const encoded = encodeURIComponent(`Habari Altavox Tech! Nahitaji tathmini ya mfumo huu:\n${setupSummary}`)
      window.open(`https://wa.me/255750227073?text=${encoded}`, '_blank')
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-orange-100 text-[#f26522]">
              <Calculator className="size-5" />
            </span>
            <h3 className="text-xl font-extrabold text-[#07294d]">
              Interactive Architecture & ROI Estimator
            </h3>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Simulate your operational workload and calculate automated time savings and deployment sizing in real-time.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl shrink-0">
          <Zap className="size-3.5 text-emerald-600" />
          <span>Real-time Verified Model</span>
        </div>
      </div>

      {/* Step 1: Choose Sector */}
      <div className="mt-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          1. Select Your Operational Domain
        </label>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {sectorLabels.map((s) => {
            const Icon = s.icon
            const active = sector === s.id
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSector(s.id)}
                className={`flex flex-col text-left p-3.5 rounded-xl border transition cursor-pointer ${
                  active
                    ? 'border-[#f26522] bg-orange-50/40 shadow-xs'
                    : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`size-4 ${active ? 'text-[#f26522]' : 'text-slate-500'}`} />
                  {active && <span className="size-2 rounded-full bg-[#f26522]" />}
                </div>
                <span className={`text-xs font-bold ${active ? 'text-[#07294d]' : 'text-slate-700'}`}>
                  {s.label}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">{s.desc}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Step 2: Scale Slider & Toggles */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center border-t border-slate-100 pt-6">
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Active Workload Volume (Subscribers / Students / Daily Users)
              </label>
              <span className="text-base font-extrabold text-[#f26522] font-mono">
                {scale.toLocaleString()} Active Units
              </span>
            </div>
            <input
              type="range"
              min={100}
              max={5000}
              step={100}
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="w-full accent-[#f26522] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>100 (Pilot)</span>
              <span>1,500 (Growing)</span>
              <span>3,000 (Established)</span>
              <span>5,000+ (High-Density)</span>
            </div>
          </div>

          {/* Infrastructure Tier */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              3. Deployment High-Availability Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'standard' as const, label: 'Single Node SLA', sub: '99.5% Uptime' },
                { id: 'high_availability' as const, label: 'Dual Active Failover', sub: '99.9% Uptime' },
                { id: 'carrier' as const, label: 'Multi-AZ Telecom Cluster', sub: '99.99% Core' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTier(t.id)}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    tier === t.id
                      ? 'border-[#07294d] bg-[#07294d] text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <p className="text-xs font-bold">{t.label}</p>
                  <p className={`text-[10px] mt-0.5 ${tier === t.id ? 'text-orange-300' : 'text-slate-400'}`}>
                    {t.sub}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Optional Automation Toggles */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={includeMPesa}
                onChange={(e) => setIncludeMPesa(e.target.checked)}
                className="size-4 accent-[#f26522] rounded"
              />
              <span>Instant M-Pesa Payment IPN Webhooks</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={includeSMSAlerts}
                onChange={(e) => setIncludeSMSAlerts(e.target.checked)}
                className="size-4 accent-[#f26522] rounded"
              />
              <span>Automated SMS Alert Notifications</span>
            </label>
          </div>
        </div>

        {/* Output Metrics Panel in JanBask Style */}
        <div className="lg:col-span-5 rounded-2xl bg-[#07294d] text-white p-6 shadow-xl space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-300">
              Projected Operational Output
            </span>
            <span className="text-xs font-mono bg-white/10 px-2 py-0.5 rounded text-slate-200">
              Estimated Monthly
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/5 p-3 border border-white/10">
              <div className="flex items-center gap-1.5 text-orange-400 mb-1">
                <Clock3 className="size-3.5" />
                <span className="text-[11px] font-semibold text-slate-300">Labor Saved</span>
              </div>
              <p className="text-2xl font-black text-white font-mono">
                {current.hoursSavedPerMonth} <span className="text-xs font-normal text-slate-300">hrs/mo</span>
              </p>
              <p className="text-[10px] text-slate-400 mt-1">Manual ticketing eliminated</p>
            </div>

            <div className="rounded-xl bg-white/5 p-3 border border-white/10">
              <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                <CheckCircle2 className="size-3.5" />
                <span className="text-[11px] font-semibold text-slate-300">Accuracy</span>
              </div>
              <p className="text-2xl font-black text-emerald-400 font-mono">
                {current.reconciliationAccuracy}
              </p>
              <p className="text-[10px] text-slate-400 mt-1">Direct database integrity</p>
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.08] p-3.5 border border-white/10 space-y-2">
            <p className="text-[11px] font-bold text-orange-200 uppercase tracking-wider">
              Recommended Altavox Architecture:
            </p>
            <p className="text-xs font-bold text-white">
              {current.recommendedEngine}
            </p>
            <ul className="space-y-1 text-[11px] text-slate-300">
              {current.specs.map((spec, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3 text-[#f26522] shrink-0" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <button
              onClick={handleAction}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#f26522] py-3 text-xs font-bold text-white shadow-lg hover:bg-[#e05312] transition cursor-pointer"
            >
              <span>Request Deployment Specs for this Setup</span>
              <ArrowRight className="size-4" />
            </button>
            <p className="mt-2 text-center text-[10px] text-slate-300">
              Or call Direct Desk at <strong>+255 750 227 073</strong> for instant review.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
