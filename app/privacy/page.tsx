import Link from 'next/link'
import { AltavoxHeader } from '@/components/altavox-header'
import { AltavoxFooter } from '@/components/altavox-footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <AltavoxHeader />
      <main className="flex-1 pb-24">
        <section className="bg-gradient-to-b from-[#07294d] via-[#093563] to-[#051c36] text-white py-12 border-b border-white/10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-mono uppercase text-[#f26522] font-bold">Altavox Tech Governance</span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold">Privacy Policy & System Data Notice</h1>
            <p className="mt-2 text-xs text-slate-300">Last updated: October 2026 · Altavox Systems</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs space-y-6 text-xs text-slate-700 leading-6">
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">1. Information We Collect</h2>
              <p className="mt-2">
                Altavox Tech collects contact details, enterprise system specifications, and operational parameters provided voluntarily when requesting proposals, technical demonstrations, or initiating system deployments. This includes company name, email address, direct telephone number, and architectural requirements.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">2. How We Protect Operational & Client Data</h2>
              <p className="mt-2">
                We implement industry-standard 256-bit SSL encryption, automated TLS certificates, database constraint security, and strict role-based access control (RBAC). We never sell, lease, or monetize client data, subscriber lists, or proprietary network topologies.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">3. Production Telemetry & Confidentiality</h2>
              <p className="mt-2">
                Telemetry and performance logs gathered from ISP billing gateways, SIMS databases, or container runtimes remain strictly isolated to the operating client. Mutual NDAs are executed prior to code and infrastructure audits.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">4. Contact Our Operations & Privacy Desk</h2>
              <p className="mt-2">
                For privacy inquiries or data governance requests, contact our direct desk at{' '}
                <a href="tel:+255750227073" className="font-bold text-[#f26522] hover:underline">
                  +255 750 227 073
                </a>{' '}
                /{' '}
                <a href="tel:+255708227073" className="font-bold text-[#f26522] hover:underline">
                  +255 708 227 073
                </a>{' '}
                or email{' '}
                <a href="mailto:engineering@altavox.space" className="font-bold text-[#f26522] hover:underline">
                  engineering@altavox.space
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <AltavoxFooter />
    </div>
  )
}
