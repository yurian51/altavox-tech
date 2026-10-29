import { PageFrame } from '@/components/site-shell'

export default function Terms() {
  return (
    <PageFrame
      eyebrow="Legal & Governance"
      title="Terms of Engagement"
      intro="Standard terms governing website usage, project inquiries, and engineering engagement agreements with Altavox Tech."
    >
      <section className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-8 text-slate-700 leading-7 text-sm">
          <div>
            <h2 className="text-xl font-bold text-[#162238]">1. Website Information & System Specifications</h2>
            <p className="mt-3 text-slate-600">
              The content on this website provides general technical information regarding Altavox Tech and its software engineering services. Project specifications, architecture models, and metrics documented on this website represent verified production and development milestones.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#162238]">2. Inquiries & Project Proposals</h2>
            <p className="mt-3 text-slate-600">
              Submitting a brief or inquiry via this website does not form a binding contract. Formal development work commences only upon mutual execution of a Master Services Agreement (MSA) or Statement of Work (SOW) outlining project scope, deliverables, milestones, and warranties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#162238]">3. Intellectual Property & Code Ownership</h2>
            <p className="mt-3 text-slate-600">
              Custom software developed for clients is delivered with complete source code ownership, schema definitions, and deployment scripts upon milestone completion, per individual engagement contracts.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#162238]">4. Governing Law</h2>
            <p className="mt-3 text-slate-600">
              Unless explicitly agreed upon in a client contract, services are provided under the legal framework and commercial statutes of the United Republic of Tanzania.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 text-xs text-slate-400">
            Effective Date: October 2026 · Altavox Tech Operations
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
