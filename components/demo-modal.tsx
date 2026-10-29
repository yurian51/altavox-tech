'use client'

import { useState } from 'react'
import { CheckCircle2, Clock3, Calendar, User, Mail, Phone, X, Sparkles, BookOpen } from 'lucide-react'
import { coursesData } from '@/lib/courses-data'

export function DemoModal({
  isOpen,
  onClose,
  initialCourse
}: {
  isOpen: boolean
  onClose: () => void
  initialCourse?: string
}) {
  const [selectedCourse, setSelectedCourse] = useState(initialCourse || coursesData[0].title)
  const [selectedBatch, setSelectedBatch] = useState('This Saturday · 10:00 AM EST (Weekend)')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-[#07294d] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#f26522]">
              <Sparkles className="size-3.5" /> 100% Free Live Instructor-Led Demo
            </div>
            <h3 className="mt-1 text-xl font-bold">Reserve Your Demo Class Seat</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-300 hover:bg-white/10 hover:text-white transition"
          >
            <X className="size-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="size-8" />
            </div>
            <h4 className="text-2xl font-bold text-[#07294d]">Demo Class Seat Confirmed!</h4>
            <p className="text-sm text-slate-600 leading-6 max-w-md mx-auto">
              Congratulations <strong className="text-slate-900">{name}</strong>! Your access pass for{' '}
              <strong className="text-[#07294d]">{selectedCourse}</strong> on <span className="font-semibold text-slate-900">{selectedBatch}</span> has been issued.
            </p>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 text-left space-y-2">
              <p>✓ Meeting link (Zoom/Webex) sent to <strong className="text-slate-900">{email}</strong></p>
              <p>✓ Course curriculum and pre-session guide attached</p>
              <p>✓ SMS reminder will be sent to <strong className="text-slate-900">{phone}</strong> 30 min before session</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 rounded-xl bg-[#f26522] px-6 py-3 text-sm font-bold text-white hover:bg-[#e05312] transition"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Select Course Track
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#f26522] focus:bg-white transition"
              >
                {coursesData.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Preferred Demo Schedule
              </label>
              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#f26522] focus:bg-white transition"
              >
                <option value="This Saturday · 10:00 AM EST (Weekend Batch)">This Saturday · 10:00 AM EST (Weekend Batch)</option>
                <option value="This Sunday · 02:00 PM EST (Weekend Batch)">This Sunday · 02:00 PM EST (Weekend Batch)</option>
                <option value="Next Tuesday · 08:00 PM EST (Weekday Evening)">Next Tuesday · 08:00 PM EST (Weekday Evening)</option>
                <option value="Next Thursday · 09:00 AM EST (Weekday Morning)">Next Thursday · 09:00 AM EST (Weekday Morning)</option>
              </select>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 size-4 text-slate-400" />
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-9 pr-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[#f26522] focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 size-4 text-slate-400" />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-9 pr-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[#f26522] focus:bg-white transition"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone Number (For WhatsApp / SMS Link) *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 size-4 text-slate-400" />
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+255 750 227 073"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-9 pr-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[#f26522] focus:bg-white transition"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#f26522] py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:bg-[#e05312] transition disabled:opacity-50"
              >
                {loading ? 'Reserving Seat…' : 'Book Free Live Demo Now'}
              </button>
            </div>

            <p className="text-center text-[11px] text-slate-500">
              🔒 No credit card required. Includes live Q&A with certified industry trainers.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
