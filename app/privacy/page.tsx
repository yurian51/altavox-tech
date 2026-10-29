import Link from 'next/link'
import { JanBaskHeader } from '@/components/janbask-header'
import { JanBaskFooter } from '@/components/janbask-footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <JanBaskHeader />
      <main className="flex-1 pb-24">
        <section className="bg-[#07294d] text-white py-12 border-b border-white/10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-mono uppercase text-[#f26522] font-bold">JanBask Policies</span>
            <h1 className="mt-2 text-3xl font-extrabold">Privacy Policy</h1>
            <p className="mt-2 text-xs text-slate-300">Last updated: January 2025</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs space-y-6 text-xs text-slate-700 leading-6">
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">1. Information We Collect</h2>
              <p className="mt-2">
                JanBask Training collects personal details provided voluntarily when you enroll in a course, book a free live demo session, request an enterprise proposal, or contact admissions advisors. This includes full name, email, phone number, career background, and payment details.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">2. How We Protect Student Data</h2>
              <p className="mt-2">
                We implement industry-standard 256-bit SSL encryption, secure PCI-compliant payment gateways, and strict database access controls. We never sell or lease your personal identifiable information to external third parties.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">3. LMS & Classroom Recordings</h2>
              <p className="mt-2">
                Classroom recordings are shared solely within the authenticated student LMS portal for educational review purposes by registered cohort peers.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">4. Contact Our Privacy Officer</h2>
              <p className="mt-2">
                For privacy inquiries or account deletion requests, email{' '}
                <a href="mailto:privacy@janbasktraining.com" className="font-bold text-[#f26522] hover:underline">
                  privacy@janbasktraining.com
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <JanBaskFooter />
    </div>
  )
}
