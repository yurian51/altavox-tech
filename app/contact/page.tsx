'use client'

import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  CheckCircle2,
  Send,
  MessageSquare,
  Sparkles,
  HelpCircle,
  Terminal,
  Server
} from 'lucide-react'
import { JanBaskHeader } from '@/components/janbask-header'
import { JanBaskFooter } from '@/components/janbask-footer'
import { coursesData } from '@/lib/courses-data'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    systemInterest: coursesData[0].title,
    preferredTime: 'Morning (10:00 AM EST)',
    message: ''
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <JanBaskHeader />

      <main className="flex-1 pb-24">
        {/* Hero in JanBask Style */}
        <section className="bg-gradient-to-b from-[#07294d] via-[#093563] to-[#051c36] text-white py-14 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <span className="rounded-full bg-[#f26522] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Altavox Operations Desk
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold">
                Get in Touch with Altavox Engineering
              </h1>
              <p className="text-base text-slate-200">
                Discuss an ISP billing deployment, school information management system, custom API, or cloud infrastructure project with our lead engineers.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Contact Details Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-orange-100 text-[#f26522]">
                    <Phone className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#07294d]">Direct Phone Lines</h3>
                    <p className="text-xs text-slate-500">Available 24/7 for operational systems</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  <p><strong>Direct Desk:</strong> <a href="tel:+19086526151" className="text-[#f26522] hover:underline">+1 908-652-6151</a></p>
                  <p><strong>Lead Systems Engineer:</strong> <span className="text-slate-800">Yurian Arshad</span></p>
                  <p><strong>Telecom Integration:</strong> MikroTik RouterOS & M-Pesa</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-blue-100 text-[#07294d]">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#07294d]">Engineering Inquiries</h3>
                    <p className="text-xs text-slate-500">Fast response directly from technical leads</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  <p><strong>Primary Contact:</strong> yurianarshad@gmail.com</p>
                  <p><strong>Engineering Desk:</strong> engineering@altavox.space</p>
                  <p><strong>Deployments:</strong> deployments@altavox.space</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#07294d]">Headquarters Location</h3>
                    <p className="text-xs text-slate-500">Bridgewater, New Jersey, USA</p>
                  </div>
                </div>
                <div className="mt-4 text-xs text-slate-700 leading-relaxed">
                  <p className="font-semibold text-slate-900">Altavox Tech, Inc.</p>
                  <p>1050 Route 22 West, Suite 201,</p>
                  <p>Bridgewater, NJ 08807, United States</p>
                </div>
              </div>

            </div>

            {/* Callback & Technical Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md">
                <div className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#07294d] text-white">
                    <MessageSquare className="size-4 text-[#f26522]" />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-[#07294d]">Schedule a System Consultation</h2>
                    <p className="text-xs text-slate-500">Our engineering lead will evaluate technical feasibility and scope</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-in fade-in">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="size-7" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-emerald-950">
                      Consultation Request Received!
                    </h3>
                    <p className="mt-2 text-xs text-emerald-800 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. An engineer focusing on <strong>{formData.systemInterest}</strong> will review your details and reach out to <strong>{formData.phone}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Yurian Arshad"
                          className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@organization.com"
                          className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">Phone / WhatsApp Number *</label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (908) 652-6151"
                          className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">System of Interest</label>
                        <select
                          value={formData.systemInterest}
                          onChange={(e) => setFormData({ ...formData, systemInterest: e.target.value })}
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                        >
                          {coursesData.map((c) => (
                            <option key={c.id} value={c.title}>
                              {c.shortTitle} ({c.duration})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700">Preferred Time for Technical Call</label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                      >
                        <option>Morning (10:00 AM - 12:00 PM EST)</option>
                        <option>Afternoon (02:00 PM - 05:00 PM EST)</option>
                        <option>Evening (06:00 PM - 09:00 PM EST)</option>
                        <option>Anytime (As soon as possible)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700">Operational Problem or Scope</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your current system, subscriber volume, school requirements, or infrastructure goals..."
                        className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-xl bg-[#f26522] py-3 text-center text-xs font-bold text-white shadow-md hover:bg-[#e05312] transition disabled:opacity-50"
                    >
                      {submitting ? 'Connecting with Lead Engineer...' : 'Submit Technical Consultation Request'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      <JanBaskFooter />
    </div>
  )
}
