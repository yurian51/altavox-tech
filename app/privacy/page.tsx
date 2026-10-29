import { PageFrame } from '@/components/site-shell'

export default function Privacy() {
  return (
    <PageFrame
      eyebrow="Legal & Governance"
      title="Privacy Notice"
      intro="How Altavox Tech handles, processes, and protects information submitted through this website and our operational software services."
    >
      <section className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-8 text-slate-700 leading-7 text-sm">
          <div>
            <h2 className="text-xl font-bold text-[#162238]">1. Information We Collect</h2>
            <p className="mt-3 text-slate-600">
              When you submit an inquiry through our contact forms or deployment tools, we collect the details you choose to provide, such as your full name, email address, organization name, project scope, and system requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#162238]">2. How We Use Collected Information</h2>
            <p className="mt-3 text-slate-600">
              Information gathered via this site is used solely to respond to inquiries, evaluate technical feasibility, prepare architecture proposals, and communicate regarding potential or active engineering engagements. We do not sell, rent, or trade your contact information to third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#162238]">3. System & Network Data Confidentiality</h2>
            <p className="mt-3 text-slate-600">
              For client projects involving network topology, MikroTik configurations, subscriber databases, or school administrative data, all records are governed under strict Non-Disclosure Agreements (NDAs) and role-based access control policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#162238]">4. Data Retention & Deletion</h2>
            <p className="mt-3 text-slate-600">
              You may request a copy of the information you have submitted or ask for its permanent deletion at any time by contacting our engineering desk at{' '}
              <a href="mailto:tumia.yurianarshad@gmail.com" className="font-semibold text-[#a96b00] hover:underline">
                tumia.yurianarshad@gmail.com
              </a>.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 text-xs text-slate-400">
            Last updated: October 2026 · Altavox Tech Operations, Dar es Salaam, Tanzania.
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
