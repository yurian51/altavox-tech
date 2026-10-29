import Link from 'next/link'
import { ArrowRight, Clock3, Mail, MapPin, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { InquiryForm } from '@/components/inquiry-form'

export default function Contact() {
  return (
    <PageFrame
      eyebrow="Contact & Collaboration"
      title="Start with the problem, not the proposal."
      intro="Share enough context for us to understand what you are trying to make clearer, faster, or more dependable. An engineer will review your brief."
    >
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#162238]">Get in touch directly</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Use this form for project inquiries, technical evaluations, architecture reviews, or exploring an ISP deployment. We only ask for information needed to respond meaningfully.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#162238]">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</p>
                <a
                  href="mailto:tumia.yurianarshad@gmail.com"
                  className="mt-1 block text-sm font-semibold text-[#a96b00] hover:text-[#162238] transition"
                >
                  tumia.yurianarshad@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#162238]">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters</p>
                <p className="mt-1 text-sm font-semibold text-[#162238]">
                  Dar es Salaam, Tanzania
                </p>
                <p className="text-xs text-slate-500">Deployments across East Africa & Global</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#162238]">
                <Clock3 className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Response SLA</p>
                <p className="mt-1 text-sm font-semibold text-[#162238]">Within 24 business hours</p>
                <p className="text-xs text-slate-500">Inquiries are triaged by software engineers</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-[#ead9ad] bg-[#fffaf0] p-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a96b00]">
              <ShieldCheck className="size-4" /> Confidentiality Guarantee
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600">
              Any business workflow details, subscriber volumes, or architectural challenges you submit remain strictly confidential between you and the Altavox engineering team.
            </p>
          </div>
        </div>

        <div>
          <InquiryForm detailed />
        </div>
      </section>
    </PageFrame>
  )
}
