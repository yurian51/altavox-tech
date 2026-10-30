'use client'

import { useState } from 'react'
import {
  Laptop, MonitorCog, Download, ShieldCheck, Cpu, Headphones,
  CalendarDays, ClipboardList, BookOpen, ReceiptText, ArrowRight,
  CheckCircle2, Search, ExternalLink, Wrench, Wifi, HardDrive,
} from 'lucide-react'
import { PageFrame } from '@/components/site-shell'

const services = [
  { id: 'PC Maintenance', title: 'PC Maintenance', detail: 'Diagnosis, tune-ups, cleanup, driver updates, performance and startup troubleshooting.', icon: Wrench },
  { id: 'Windows Installation & Activation', title: 'Windows Installation', detail: 'Windows installation, setup, drivers and activation using a genuine licence supplied by the customer or purchased lawfully.', icon: MonitorCog },
  { id: 'Software Centre', title: 'Software Centre', detail: 'Installation and setup of productivity, business, education, design and developer applications.', icon: Download },
  { id: 'Security Centre', title: 'Security Centre', detail: 'Malware checks, security updates, backup guidance, account protection and endpoint hardening.', icon: ShieldCheck },
  { id: 'Hardware Support', title: 'Hardware Support', detail: 'RAM, SSD, battery, keyboard, screen, printer and peripheral diagnosis or replacement assessment.', icon: Cpu },
  { id: 'Remote Support', title: 'Remote Support', detail: 'Guided remote troubleshooting after your booking is reviewed and a support session is agreed.', icon: Headphones },
  { id: 'Service Booking', title: 'Service Booking', detail: 'Send your device details and preferred service date. The team confirms availability directly.', icon: CalendarDays },
  { id: 'Repair Tracking', title: 'Repair Tracking', detail: 'Use your request code and booking email to check the latest recorded repair stage.', icon: ClipboardList },
  { id: 'IT Knowledge Base', title: 'IT Knowledge Base', detail: 'Practical guides for Windows, Wi-Fi, printers, backups and everyday PC problems.', icon: BookOpen },
  { id: 'Quotations & Invoices', title: 'Quotations & Invoices', detail: 'Request an itemised estimate before work begins. Final invoices are issued after service confirmation.', icon: ReceiptText },
]

const guides = [
  { title: 'PC is running slowly', steps: ['Restart the computer and close apps you are not using.', 'Check available storage and remove only files you recognise.', 'Open Task Manager to identify unusually heavy processes.', 'If the problem continues, book a diagnostic check.'] },
  { title: 'Windows Update is stuck', steps: ['Keep the computer connected to power and a stable network.', 'Restart once if Windows requests it.', 'Check free disk space before retrying the update.', 'Avoid unofficial activators or unknown repair utilities.'] },
  { title: 'Wi-Fi keeps disconnecting', steps: ['Restart the router and computer.', 'Test another device on the same Wi-Fi network.', 'Move closer to the router and check whether the issue persists.', 'Book support if multiple devices keep disconnecting.'] },
  { title: 'Printer will not print', steps: ['Check power, paper and ink or toner.', 'Confirm the printer and computer are on the same network if wireless.', 'Clear the print queue and restart the printer.', 'Book a printer setup or hardware assessment if needed.'] },
]

const softwareLinks = [
  { name: 'Microsoft 365', href: 'https://www.microsoft.com/microsoft-365', note: 'Office and productivity' },
  { name: 'Google Chrome', href: 'https://www.google.com/chrome/', note: 'Web browser' },
  { name: 'Mozilla Firefox', href: 'https://www.mozilla.org/firefox/new/', note: 'Web browser' },
  { name: '7-Zip', href: 'https://www.7-zip.org/', note: 'File archiving' },
  { name: 'VLC Media Player', href: 'https://www.videolan.org/vlc/', note: 'Media playback' },
  { name: 'Visual Studio Code', href: 'https://code.visualstudio.com/', note: 'Code editor' },
  { name: 'Malwarebytes', href: 'https://www.malwarebytes.com/', note: 'Security tools' },
  { name: 'Rufus', href: 'https://rufus.ie/', note: 'Bootable USB creation' },
]

type RequestResult = { trackingCode: string; message: string }
type TrackingResult = { trackingCode: string; serviceType: string; device: string; status: string; quote: { amount: string; currency: string } | null; createdAt: string; updatedAt: string }

export default function ComputerPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', serviceType: 'PC Maintenance', deviceDetails: '', issueDescription: '', preferredDate: '' })
  const [submitting, setSubmitting] = useState(false)
  const [requestResult, setRequestResult] = useState<RequestResult | null>(null)
  const [requestError, setRequestError] = useState('')
  const [tracking, setTracking] = useState({ code: '', email: '' })
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null)
  const [trackingError, setTrackingError] = useState('')
  const [trackingBusy, setTrackingBusy] = useState(false)
  const [activeGuide, setActiveGuide] = useState(0)

  async function submitRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setRequestError('')
    setRequestResult(null)
    try {
      const response = await fetch('/api/computer/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Request could not be saved.')
      setRequestResult(data)
      setForm({ name: '', email: '', phone: '', serviceType: 'PC Maintenance', deviceDetails: '', issueDescription: '', preferredDate: '' })
    } catch (error) {
      setRequestError(error instanceof Error ? error.message : 'Request could not be saved.')
    } finally {
      setSubmitting(false)
    }
  }

  async function lookupRepair(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTrackingBusy(true)
    setTrackingError('')
    setTrackingResult(null)
    try {
      const params = new URLSearchParams({ code: tracking.code, email: tracking.email })
      const response = await fetch(`/api/computer/requests?${params.toString()}`, { cache: 'no-store' })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Tracking lookup failed.')
      setTrackingResult(data.request)
    } catch (error) {
      setTrackingError(error instanceof Error ? error.message : 'Tracking lookup failed.')
    } finally {
      setTrackingBusy(false)
    }
  }

  return (
    <PageFrame eyebrow="Altavox Computer Services" title="Computer support that gets real work done." intro="Book PC maintenance, request genuine Windows setup, get software support, and track a repair from one practical service desk.">
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-5 md:grid-cols-2">
          <div className="bg-[#07294d] p-7 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Computer Services Desk</p>
            <h2 className="mt-3 text-2xl font-bold">From a slow laptop to a complete workstation setup.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">Tell us what is wrong, request the service you need, and receive a tracking code when your request is saved.</p>
            <a href="#book-service" className="mt-6 inline-flex items-center gap-2 bg-[#f26522] px-5 py-3 text-sm font-bold text-white">Book a service <ArrowRight className="size-4" /></a>
          </div>
          <div className="border border-slate-200 bg-white p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f26522]">Quick access</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <a href="#software" className="border border-slate-200 p-4 font-semibold hover:border-[#f26522]">Software downloads</a>
              <a href="#tracking" className="border border-slate-200 p-4 font-semibold hover:border-[#f26522]">Track a repair</a>
              <a href="#knowledge" className="border border-slate-200 p-4 font-semibold hover:border-[#f26522]">Help guides</a>
              <a href="#quote" className="border border-slate-200 p-4 font-semibold hover:border-[#f26522]">Get a quotation</a>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div><p className="text-xs font-bold uppercase tracking-widest text-[#f26522]">10 useful tools and services</p><h2 className="mt-2 text-2xl font-bold text-[#07294d]">One computer support centre</h2></div>
            <a href="#book-service" className="text-sm font-bold text-[#f26522]">Request support <ArrowRight className="inline size-4" /></a>
          </div>
          <div className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => {
              const Icon = service.icon
              return <a key={service.id} href={service.id === 'Repair Tracking' ? '#tracking' : service.id === 'IT Knowledge Base' ? '#knowledge' : service.id === 'Quotations & Invoices' ? '#quote' : '#book-service'} className="bg-white p-5 transition hover:bg-orange-50">
                <div className="flex items-center justify-between"><Icon className="size-6 text-[#f26522]" /><span className="font-mono text-xs text-slate-400">{String(index + 1).padStart(2, '0')}</span></div>
                <h3 className="mt-4 text-sm font-bold text-[#07294d]">{service.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{service.detail}</p>
              </a>
            })}
          </div>
        </section>

        <section id="book-service" className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#f26522]">Service booking</p>
            <h2 className="mt-2 text-2xl font-bold text-[#07294d]">Tell us what your computer needs.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Use this form for repairs, Windows setup, software installation, remote assistance or a quotation. Your request is stored only when the database confirms it.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <p className="flex gap-2"><CheckCircle2 className="size-5 shrink-0 text-[#f26522]" /> Request reference generated after saving</p>
              <p className="flex gap-2"><CheckCircle2 className="size-5 shrink-0 text-[#f26522]" /> Track status using your email and reference</p>
              <p className="flex gap-2"><CheckCircle2 className="size-5 shrink-0 text-[#f26522]" /> Quotation requested before chargeable work</p>
            </div>
          </div>
          <form onSubmit={submitRequest} className="space-y-4 border border-slate-200 bg-white p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-semibold text-slate-700">Full name *<input required maxLength={120} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1 w-full border border-slate-300 px-3 py-3 text-sm" /></label>
              <label className="text-xs font-semibold text-slate-700">Email *<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mt-1 w-full border border-slate-300 px-3 py-3 text-sm" /></label>
              <label className="text-xs font-semibold text-slate-700">Phone / WhatsApp *<input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full border border-slate-300 px-3 py-3 text-sm" /></label>
              <label className="text-xs font-semibold text-slate-700">Service *<select value={form.serviceType} onChange={e => setForm({ ...form, serviceType: e.target.value })} className="mt-1 w-full border border-slate-300 bg-white px-3 py-3 text-sm">{services.map(s => <option key={s.id}>{s.id}</option>)}</select></label>
            </div>
            <label className="block text-xs font-semibold text-slate-700">Computer model / device details *<input required value={form.deviceDetails} onChange={e => setForm({ ...form, deviceDetails: e.target.value })} placeholder="e.g. HP ProBook 450 G8, Windows 11" className="mt-1 w-full border border-slate-300 px-3 py-3 text-sm" /></label>
            <label className="block text-xs font-semibold text-slate-700">Describe the problem or work required *<textarea required rows={4} value={form.issueDescription} onChange={e => setForm({ ...form, issueDescription: e.target.value })} className="mt-1 w-full border border-slate-300 px-3 py-3 text-sm" /></label>
            <label className="block text-xs font-semibold text-slate-700">Preferred service date (optional)<input type="date" min={new Date().toISOString().slice(0, 10)} value={form.preferredDate} onChange={e => setForm({ ...form, preferredDate: e.target.value })} className="mt-1 w-full border border-slate-300 px-3 py-3 text-sm" /></label>
            {requestError && <p role="alert" className="border border-red-200 bg-red-50 p-3 text-sm text-red-700">{requestError}</p>}
            {requestResult && <div role="status" className="border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"><p className="font-bold">Request saved. Keep this tracking code:</p><p className="mt-1 font-mono text-xl">{requestResult.trackingCode}</p><p className="mt-1">{requestResult.message} Use the same email to track the request.</p></div>}
            <button disabled={submitting} className="inline-flex w-full items-center justify-center gap-2 bg-[#f26522] px-5 py-3 font-bold text-white disabled:opacity-50">{submitting ? 'Saving request…' : 'Submit service request'} <ArrowRight className="size-4" /></button>
          </form>
        </section>

        <section id="tracking" className="grid gap-8 border-y border-slate-200 py-10 md:grid-cols-2">
          <div><p className="text-xs font-bold uppercase tracking-widest text-[#f26522]">Repair tracking</p><h2 className="mt-2 text-2xl font-bold text-[#07294d]">Check your service status.</h2><p className="mt-3 text-sm leading-6 text-slate-600">Enter the reference code sent after booking and the same email address used on the request.</p></div>
          <div>
            <form onSubmit={lookupRepair} className="space-y-3">
              <input required placeholder="Tracking code e.g. AVX-12AB34CD" value={tracking.code} onChange={e => setTracking({ ...tracking, code: e.target.value })} className="w-full border border-slate-300 px-3 py-3 text-sm" />
              <input required type="email" placeholder="Booking email address" value={tracking.email} onChange={e => setTracking({ ...tracking, email: e.target.value })} className="w-full border border-slate-300 px-3 py-3 text-sm" />
              {trackingError && <p role="alert" className="text-sm text-red-700">{trackingError}</p>}
              <button disabled={trackingBusy} className="inline-flex items-center gap-2 bg-[#07294d] px-5 py-3 text-sm font-bold text-white">{trackingBusy ? 'Checking…' : 'Find my repair'} <Search className="size-4" /></button>
            </form>
            {trackingResult && <div className="mt-4 border border-slate-200 bg-slate-50 p-4 text-sm"><p className="font-mono font-bold text-[#f26522]">{trackingResult.trackingCode}</p><p className="mt-2 font-bold text-[#07294d]">{trackingResult.status}</p><p className="mt-1 text-slate-600">{trackingResult.serviceType} · {trackingResult.device}</p>{trackingResult.quote && <p className="mt-2">Quotation: {trackingResult.quote.currency} {Number(trackingResult.quote.amount).toLocaleString()}</p>}<p className="mt-2 text-xs text-slate-500">Last updated: {new Date(trackingResult.updatedAt).toLocaleString()}</p></div>}
          </div>
        </section>

        <section id="software">
          <div className="mb-5"><p className="text-xs font-bold uppercase tracking-widest text-[#f26522]">Software centre</p><h2 className="mt-2 text-2xl font-bold text-[#07294d]">Download from official publishers.</h2><p className="mt-2 text-sm text-slate-600">These links open the publisher's official website. Check licence terms before installing or using paid software.</p></div>
          <div className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">{softwareLinks.map(item => <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white p-4 hover:bg-orange-50"><span><strong className="block text-sm text-[#07294d]">{item.name}</strong><span className="text-xs text-slate-500">{item.note}</span></span><ExternalLink className="size-4 text-[#f26522]" /></a>)}</div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="border border-slate-200 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f26522]">Security centre</p><h2 className="mt-2 text-xl font-bold text-[#07294d]">Basic PC safety checklist</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">{['Keep Windows and applications updated.', 'Use genuine software and remove unknown activators.', 'Enable built-in firewall and reputable endpoint protection.', 'Back up important documents to a separate location.', 'Use unique passwords and multi-factor authentication.', 'Do not open unexpected attachments or remote-access links.'].map(x => <li key={x} className="flex gap-2"><ShieldCheck className="size-4 shrink-0 text-[#f26522]" />{x}</li>)}</ul>
          </div>
          <div className="border border-slate-200 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f26522]">Remote support</p><h2 className="mt-2 text-xl font-bold text-[#07294d]">Get guided help safely.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Submit a support request first. An Altavox technician will confirm the session and provide the approved connection instructions. Never share passwords, banking PINs or one-time codes.</p>
            <a href="#book-service" className="mt-5 inline-flex items-center gap-2 bg-[#07294d] px-4 py-3 text-sm font-bold text-white">Request remote help <ArrowRight className="size-4" /></a>
          </div>
        </section>

        <section id="knowledge">
          <div className="mb-5"><p className="text-xs font-bold uppercase tracking-widest text-[#f26522]">IT knowledge base</p><h2 className="mt-2 text-2xl font-bold text-[#07294d]">Quick fixes for common problems.</h2></div>
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex flex-col border border-slate-200">{guides.map((guide, index) => <button key={guide.title} onClick={() => setActiveGuide(index)} className={`border-b border-slate-200 p-4 text-left text-sm font-semibold ${activeGuide === index ? 'bg-[#07294d] text-white' : 'bg-white text-[#07294d] hover:bg-orange-50'}`}>{guide.title}</button>)}</div>
            <article className="border border-slate-200 bg-slate-50 p-6"><h3 className="text-lg font-bold text-[#07294d]">{guides[activeGuide].title}</h3><ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-600">{guides[activeGuide].steps.map(step => <li key={step}>{step}</li>)}</ol></article>
          </div>
        </section>

        <section id="quote" className="flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xs font-bold uppercase tracking-widest text-[#f26522]">Quotations & invoices</p><h2 className="mt-2 text-2xl font-bold text-[#07294d]">Know the cost before work begins.</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Choose “Quotations & Invoices” in the booking form and describe the device or service. We will review the request and confirm the estimate before chargeable work starts. An invoice is issued after the service is agreed.</p></div>
          <a href="#book-service" onClick={() => setForm(current => ({ ...current, serviceType: 'Quotations & Invoices' }))} className="inline-flex shrink-0 items-center gap-2 bg-[#f26522] px-5 py-3 text-sm font-bold text-white">Request a quotation <ReceiptText className="size-4" /></a>
        </section>

        <section className="border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500"><p>Windows activation is provided only for valid, genuine licences. Software links are supplied for convenience and remain subject to each publisher's terms. Repair status shows the latest information recorded by the service desk; it does not guarantee a completion time.</p></section>
      </div>
    </PageFrame>
  )
}
