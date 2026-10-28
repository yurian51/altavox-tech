'use client'

import { useState } from 'react'

export function InquiryForm({ detailed = false }: { detailed?: boolean }) {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('sending')
    const data = Object.fromEntries(new FormData(event.currentTarget))
    try {
      const response = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      setState(response.ok ? 'sent' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') return <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-[#162238]"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Message received</p><h2 className="mt-3 text-2xl font-extrabold">Thank you. We&apos;ll review the context and respond.</h2></div>

  return <form onSubmit={submit} className="grid gap-5 rounded-2xl border border-[#162238]/10 bg-white p-6 shadow-[0_18px_55px_rgba(22,34,56,0.08)] sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2"><Field name="name" label="Name" required /><Field name="email" label="Email" type="email" required /></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field name="organization" label="Organization" /><Field name="service" label="Service of interest" placeholder="e.g. web application, API, infrastructure" /></div>
    {detailed && <><Field name="projectType" label="Project type" placeholder="What are you building or improving?" /><Field name="timeline" label="Timeline" placeholder="When would you like to begin?" /></>}
    <label className="grid gap-2 text-sm font-semibold text-[#162238]">Project description<textarea name="description" required rows={6} className="min-h-36 rounded-lg border border-[#162238]/15 bg-[#f8fafc] px-4 py-3 text-[#162238] outline-none placeholder:text-slate-400 focus:border-[#e59a15] focus:ring-2 focus:ring-[#f3a923]/30" placeholder="What problem are you trying to solve?" /></label>
    <p className="text-xs leading-5 text-slate-500">By submitting, you agree that Altavox Tech may use these details to respond to your enquiry.</p>
    {state === 'error' && <p className="text-sm text-red-700">The enquiry service is not configured yet. Please try again later.</p>}
    <button disabled={state === 'sending'} className="inline-flex w-fit items-center rounded-lg bg-[#162238] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e59a15] disabled:opacity-50">{state === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
  </form>
}

function Field({ name, label, type = 'text', required = false, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return <label className="grid min-w-0 gap-2 text-sm font-semibold text-[#162238]">{label}<input name={name} type={type} required={required} placeholder={placeholder} className="min-w-0 rounded-lg border border-[#162238]/15 bg-[#f8fafc] px-4 py-3 text-[#162238] outline-none placeholder:text-slate-400 focus:border-[#e59a15] focus:ring-2 focus:ring-[#f3a923]/30" /></label>
}
