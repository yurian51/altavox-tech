'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Building2,
  Users,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Award,
  PhoneCall,
  Mail,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { JanBaskHeader } from '@/components/janbask-header'
import { JanBaskFooter } from '@/components/janbask-footer'

export default function CorporateTrainingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    teamSize: '10-25 employees',
    track: 'Cloud Computing & AWS',
    timeline: 'Within 30 days',
    message: ''
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 700)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <JanBaskHeader />

      <main className="flex-1 pb-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#07294d] via-[#093563] to-[#051c36] text-white py-14 lg:py-20 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="rounded-full bg-[#f26522] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Enterprise & Business Solutions
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                Upskill Your Enterprise Workforce with Custom IT Training
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Empower your engineering, cloud, security, and QA teams with tailored live training delivered by certified industry practitioners. Measure business ROI with skill benchmarking and hands-on capstone projects.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#quote-form"
                  className="rounded-xl bg-[#f26522] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#e05312] transition"
                >
                  Request a Custom Training Proposal
                </a>
                <a
                  href="tel:+19086526151"
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition"
                >
                  <PhoneCall className="size-4 text-[#f26522]" />
                  <span>Call Enterprise Desk: +1 908-652-6151</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Highlights Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-xl bg-orange-100 text-[#f26522]">
                <Building2 className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#07294d]">Tailored Curriculum</h3>
              <p className="mt-1 text-xs text-slate-600 leading-5">
                Training content designed around your company&apos;s specific architecture, codebase, and security policies.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-100 text-[#07294d]">
                <Users className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#07294d]">Dedicated Private Cohorts</h3>
              <p className="mt-1 text-xs text-slate-600 leading-5">
                Exclusive live classes for your team with flexible schedules across US, UK, and European timezones.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <BarChart3 className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#07294d]">Skill Benchmarking</h3>
              <p className="mt-1 text-xs text-slate-600 leading-5">
                Pre-training diagnostic exams, milestone skill trackers, and post-training competency scorecards.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                <Award className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#07294d]">Vendor Certifications</h3>
              <p className="mt-1 text-xs text-slate-600 leading-5">
                Prepares team members to pass official exams from AWS, Salesforce, Microsoft, CompTIA, and Scrum.
              </p>
            </div>
          </div>
        </section>

        {/* Enterprise Tracks & RFP Form */}
        <section id="quote-form" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Left: What We Train */}
            <div className="lg:col-span-6 space-y-6">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#f26522]">
                Enterprise Skill Domains
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07294d]">
                Popular Enterprise Cohort Tracks
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Cloud Architecture & DevOps',
                    desc: 'AWS Well-Architected frameworks, Terraform infrastructure-as-code, Docker, Kubernetes container orchestration, and CI/CD pipelines.'
                  },
                  {
                    title: 'Salesforce Enterprise CRM Solutions',
                    desc: 'Platform Developer I & II, Lightning Web Components (LWC), OmniStudio, Service Cloud, and enterprise integration patterns.'
                  },
                  {
                    title: 'Data Science, Machine Learning & Gen AI',
                    desc: 'Python analytics, predictive modeling, LLM prompt engineering, RAG architectures, and enterprise AI governance.'
                  },
                  {
                    title: 'QA Automation & Continuous Testing',
                    desc: 'Selenium WebDriver, Playwright, REST-assured API testing, Performance testing with JMeter, and Agile sprint integration.'
                  },
                  {
                    title: 'Enterprise Cyber Security & DevSecOps',
                    desc: 'Security operations (SOC), vulnerability management, cloud IAM compliance, ethical hacking, and threat intelligence.'
                  }
                ].map((track, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <h3 className="text-sm font-bold text-[#07294d] flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[#f26522] shrink-0" />
                      <span>{track.title}</span>
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 pl-6 leading-relaxed">
                      {track.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: RFP Request Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md">
                <div className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#07294d] text-white">
                    <Mail className="size-4 text-[#f26522]" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#07294d]">Request an Enterprise Proposal</h3>
                    <p className="text-xs text-slate-500">Receive a detailed syllabus, timeline, and group rate quote</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-in fade-in">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="size-7" />
                    </div>
                    <h4 className="mt-4 text-base font-bold text-emerald-950">
                      Proposal Request Received!
                    </h4>
                    <p className="mt-2 text-xs text-emerald-800 leading-relaxed">
                      Thank you! Our Corporate Learning Director will review your requirements for <strong>{formData.companyName}</strong> and send an enterprise training proposal to <strong>{formData.email}</strong> within 1 business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">Company Name *</label>
                        <input
                          required
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Acme Corp / Tech Inc"
                          className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">Your Full Name *</label>
                        <input
                          required
                          type="text"
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          placeholder="Sarah Jenkins"
                          className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">Corporate Work Email *</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@acme.com"
                          className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">Phone Number *</label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">Team Size to Train</label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                        >
                          <option>5 - 10 employees</option>
                          <option>10 - 25 employees</option>
                          <option>25 - 50 employees</option>
                          <option>50 - 100+ employees</option>
                          <option>Entire Engineering Dept</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">Primary Domain Track</label>
                        <select
                          value={formData.track}
                          onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                        >
                          <option>Cloud Computing & AWS</option>
                          <option>Salesforce CRM & Dev</option>
                          <option>Data Science & Gen AI</option>
                          <option>QA Automation & Selenium</option>
                          <option>Cyber Security & DevSecOps</option>
                          <option>Custom Multi-Skill Track</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700">Specific Requirements or Objectives</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your team's current stack, goals, and desired start dates..."
                        className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-xs text-slate-900 outline-none focus:border-[#f26522]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-xl bg-[#f26522] py-3 text-center text-xs font-bold text-white shadow-md hover:bg-[#e05312] transition disabled:opacity-50"
                    >
                      {submitting ? 'Sending Request...' : 'Submit Enterprise Proposal Request'}
                    </button>
                    <p className="text-center text-[11px] text-slate-400">
                      We sign mutual NDAs upon request before reviewing proprietary codebases.
                    </p>
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
