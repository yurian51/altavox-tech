import Link from 'next/link'
import { JanBaskHeader } from '@/components/janbask-header'
import { JanBaskFooter } from '@/components/janbask-footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <JanBaskHeader />
      <main className="flex-1 pb-24">
        <section className="bg-[#07294d] text-white py-12 border-b border-white/10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-mono uppercase text-[#f26522] font-bold">JanBask Policies</span>
            <h1 className="mt-2 text-3xl font-extrabold">Terms & Conditions</h1>
            <p className="mt-2 text-xs text-slate-300">Effective Date: January 2025</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs space-y-6 text-xs text-slate-700 leading-6">
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">1. Enrollment & Access Guarantee</h2>
              <p className="mt-2">
                Upon enrollment in a JanBask certification course, students are granted admission to live interactive cohorts, access to sandbox laboratory environments, and lifetime access to high-definition video archives on the JanBask Learning Management System (LMS).
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">2. Free Batch Retake Policy</h2>
              <p className="mt-2">
                Enrolled students have the right to attend an upcoming live batch for the same course within six (6) months of enrollment at no additional tuition fee if they need revision or missed consecutive classes.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">3. Intellectual Property</h2>
              <p className="mt-2">
                All training curriculum, project sandboxes, problem sets, and code repositories are proprietary intellectual property of JanBask Training, Inc. Materials may not be duplicated or distributed without prior written consent.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#07294d]">4. Refund & Cancellation Terms</h2>
              <p className="mt-2">
                Students may request a refund prior to attending the second scheduled live class of their cohort. Once 2 or more classes are attended or custom sandbox credentials are issued, tuition fees are non-refundable but transferable to other upcoming batches or courses.
              </p>
            </div>
          </div>
        </section>
      </main>
      <JanBaskFooter />
    </div>
  )
}
