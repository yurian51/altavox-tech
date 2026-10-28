'use client'

import { useEffect, useState } from 'react'

type Status = { devices: number; telemetry: number; queued_commands: number; audit_events: number }

export function OperationsStatus() {
  const [status, setStatus] = useState<Status | null>(null)
  const [error, setError] = useState(false)
  useEffect(() => { fetch('/api/operations/status').then((response) => response.ok ? response.json() : Promise.reject()).then((payload) => setStatus(payload.data)).catch(() => setError(true)) }, [])
  const cards = status ? [['Devices', status.devices], ['Telemetry', status.telemetry], ['Queued commands', status.queued_commands], ['Audit events', status.audit_events]] : []
  return <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{cards.length ? cards.map(([label, value]) => <div key={label} className="rounded-xl border border-white/10 bg-[#07101b]/70 p-4"><p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{label}</p><p className="mt-3 text-2xl font-medium text-white">{value}</p><p className="mt-1 text-xs text-slate-500">Live database count</p></div>) : <div className="sm:col-span-2 lg:col-span-4 rounded-xl border border-amber-300/20 bg-amber-300/[0.04] p-4 text-sm text-amber-100">{error ? 'Operations data is unavailable.' : 'Loading operations data…'}</div>}</div>
}
