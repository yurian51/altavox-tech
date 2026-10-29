'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Star,
  Clock3,
  Calendar,
  CheckCircle2,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Download,
  Users,
  Briefcase,
  HelpCircle,
  PhoneCall,
  Sparkles,
  Layers
} from 'lucide-react'
import { JanBaskHeader } from '@/components/janbask-header'
import { JanBaskFooter } from '@/components/janbask-footer'
import { BatchScheduleCalculator } from '@/components/batch-schedule-calculator'
import { DemoModal } from '@/components/demo-modal'
import { CurriculumModal } from '@/components/curriculum-modal'
import { coursesData, CourseItem } from '@/lib/courses-data'

export default function CourseDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = use(params)
  const course = coursesData.find((c) => c.slug === resolvedParams.slug)

  if (!course) {
    notFound()
  }

  const [expandedModule, setExpandedModule] = useState<number | null>(0)
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [curriculumModalOpen, setCurriculumModalOpen] = useState(false)

  const relatedCourses = coursesData.filter((c) => c.id !== course.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <JanBaskHeader />

      <main className="flex-1 pb-24">
        {/* ======================================================== */}
        {/* COURSE HERO SECTION */}
        {/* ======================================================== */}
        <section className="bg-gradient-to-b from-[#07294d] via-[#093563] to-[#051c36] text-white py-12 lg:py-16 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/courses" className="hover:text-white transition">Courses</Link>
              <span>/</span>
              <span className="text-[#f26522] font-semibold">{course.category}</span>
            </div>

            <div className="mt-6 max-w-4xl space-y-4">
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded bg-white/15 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-cyan-200">
                  {course.category}
                </span>
                {course.badge && (
                  <span className="rounded-full bg-[#f26522] px-3 py-1 text-xs font-extrabold uppercase text-white shadow-xs">
                    {course.badge}
                  </span>
                )}
                <span className="text-xs text-orange-200 flex items-center gap-1.5">
                  <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Instructor-Led
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {course.title}
              </h1>

              {/* Short summary */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
                {course.overview}
              </p>

              {/* Stats Bar */}
              <div className="flex flex-wrap items-center gap-6 pt-3 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  <span>{course.rating} / 5.0</span>
                  <span className="text-slate-300 font-normal">({course.reviewCount.toLocaleString()} reviews)</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-200">
                  <Users className="size-4 text-cyan-300" />
                  <span>{course.enrolledStudents.toLocaleString()}+ Learners Certified</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-200">
                  <Clock3 className="size-4 text-[#f26522]" />
                  <span>{course.duration} ({course.liveHours})</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-200">
                  <Calendar className="size-4 text-emerald-400" />
                  <span>{course.nextBatch}</span>
                </div>
              </div>

              {/* Quick Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('enrollment-section')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="rounded-xl bg-[#f26522] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#e05312] transition"
                >
                  Enroll Now (${course.discountPrice})
                </button>

                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-md hover:bg-white/20 transition"
                >
                  Book Free Demo Class
                </button>

                <button
                  onClick={() => setCurriculumModalOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 px-4 py-3.5 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition"
                >
                  <Download className="size-4 text-cyan-300" />
                  <span>Download Syllabus (PDF)</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* MAIN BODY: 2-COLUMN LAYOUT (CONTENT + INTERACTIVE STICKY) */}
        {/* ======================================================== */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* LEFT COLUMN: COURSE CONTENT DETAILS */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* 1. Target Audience & Career Growth */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl font-bold text-[#07294d] flex items-center gap-2">
                  <Briefcase className="size-5 text-[#f26522]" />
                  <span>Target Audience & Career Outcomes</span>
                </h2>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Who Should Take This Course?
                    </h3>
                    <ul className="mt-3 space-y-2.5 text-xs text-slate-700">
                      {course.targetAudience.map((aud, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{aud}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Career Roles You Qualify For
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {course.careerRoles.map((role, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-[#07294d] border border-slate-200 shadow-xs"
                        >
                          {role}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Target Average Salary:</span>
                      <span className="text-sm font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        {course.averageSalary}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Skills & Tools Covered */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl font-bold text-[#07294d] flex items-center gap-2">
                  <Layers className="size-5 text-[#f26522]" />
                  <span>Skills & Tools You Will Master</span>
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.skillsCovered.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-800 border border-slate-200 hover:border-[#f26522] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-orange-50 border border-orange-200 p-4 flex items-center gap-3">
                  <Award className="size-6 text-[#f26522] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-[#07294d]">Certification Exam Prep Included</p>
                    <p className="text-xs text-slate-600">{course.certificationAlignment}</p>
                  </div>
                </div>
              </div>

              {/* 3. Comprehensive Week-by-Week Curriculum */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-[#07294d] flex items-center gap-2">
                      <BookOpen className="size-5 text-[#f26522]" />
                      <span>Curriculum & Hands-On Capstone Projects</span>
                    </h2>
                    <p className="mt-1 text-xs text-slate-500">
                      {course.modules.length} Modules · {course.liveHours} of Live Instructor-Led Training
                    </p>
                  </div>

                  <button
                    onClick={() => setCurriculumModalOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 self-start"
                  >
                    <Download className="size-3.5 text-[#f26522]" />
                    <span>Download PDF</span>
                  </button>
                </div>

                {/* Modules Accordion */}
                <div className="mt-6 space-y-3">
                  {course.modules.map((mod, index) => {
                    const isOpen = expandedModule === index
                    return (
                      <div
                        key={index}
                        className="rounded-xl border border-slate-200 overflow-hidden transition"
                      >
                        <button
                          onClick={() => setExpandedModule(isOpen ? null : index)}
                          className={`w-full flex items-center justify-between p-4 text-left transition ${
                            isOpen ? 'bg-[#07294d] text-white' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`rounded-md px-2 py-0.5 text-xs font-mono font-bold ${
                                isOpen ? 'bg-[#f26522] text-white' : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              {mod.week}
                            </span>
                            <span className="text-sm font-bold">{mod.title}</span>
                          </div>
                          {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                        </button>

                        {isOpen && (
                          <div className="p-5 bg-white border-t border-slate-100 space-y-4">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                Topics Explored:
                              </p>
                              <ul className="mt-2.5 grid gap-2 sm:grid-cols-2 text-xs text-slate-700">
                                {mod.topics.map((t, tidx) => (
                                  <li key={tidx} className="flex items-start gap-2">
                                    <CheckCircle2 className="size-3.5 text-[#f26522] shrink-0 mt-0.5" />
                                    <span>{t}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3">
                              <p className="text-[11px] font-bold text-emerald-900 uppercase tracking-wide">
                                🛠️ Hands-On Capstone Project:
                              </p>
                              <p className="mt-1 text-xs text-emerald-800 font-medium">
                                {mod.project}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* 4. The JanBask Classroom Guarantee */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-[#07294d] text-white p-6 sm:p-8 shadow-md">
                <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                  <ShieldCheck className="size-6 text-[#f26522]" />
                  <span>The JanBask 100% Training Guarantee</span>
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-3 text-xs">
                  <div>
                    <h3 className="font-bold text-amber-300">Free Batch Retake</h3>
                    <p className="mt-1 text-slate-300 leading-5">
                      Need to revise concepts? You can rejoin subsequent live batches within 6 months at zero additional tuition fee.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-300">100% Live Certified Mentors</h3>
                    <p className="mt-1 text-slate-300 leading-5">
                      Taught exclusively by active senior cloud architects, certified developers, and enterprise consultants.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-300">Job Placement Assistance</h3>
                    <p className="mt-1 text-slate-300 leading-5">
                      Resume makeover, LinkedIn keyword optimization, and direct profile sharing with 500+ global hiring partners.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Course Specific FAQs */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl font-bold text-[#07294d]">Course FAQs</h2>
                <div className="mt-6 space-y-4 text-xs">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <h3 className="font-bold text-[#07294d]">What if I miss a scheduled class?</h3>
                    <p className="mt-1.5 text-slate-600 leading-relaxed">
                      Every live class is recorded in HD and posted to your LMS portal within 24 hours. You have unlimited lifetime access. You may also join the missed session in another running batch.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4">
                    <h3 className="font-bold text-[#07294d]">Will I receive a course completion certificate?</h3>
                    <p className="mt-1.5 text-slate-600 leading-relaxed">
                      Yes. Upon successful completion of the course and capstone project, you receive a verified JanBask Training Certificate of Completion with a unique credential ID suitable for LinkedIn.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4">
                    <h3 className="font-bold text-[#07294d]">Are practice exams and dumps included?</h3>
                    <p className="mt-1.5 text-slate-600 leading-relaxed">
                      Yes! You receive simulated exam practice sets, real question scenario walkthroughs, and study guides aligned with the official vendor certification guidelines.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: INTERACTIVE BATCH CALCULATOR & DEMO SIDEBAR */}
            <div id="enrollment-section" className="lg:col-span-4 space-y-6">
              
              {/* Batch Schedule & Tuition Calculator Component */}
              <BatchScheduleCalculator course={course} />

              {/* Need Quick Help Box */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-orange-100 text-[#f26522] mx-auto">
                  <PhoneCall className="size-6" />
                </div>
                <h3 className="mt-3 text-base font-bold text-[#07294d]">Have Questions About This Batch?</h3>
                <p className="mt-1 text-xs text-slate-600">
                  Speak directly with an Admissions Counselor for customized scheduling or payment installment options.
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href="tel:+19086526151"
                    className="block w-full rounded-xl bg-[#07294d] py-2.5 text-xs font-bold text-white hover:bg-[#051c36] transition"
                  >
                    Call: +1 908-652-6151
                  </a>
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="block w-full rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                  >
                    Book Free Demo Class
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Related courses */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
          <div className="border-t border-slate-200 pt-10">
            <h2 className="text-xl font-bold text-[#07294d]">Learners Also Looked At</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {relatedCourses.map((rel) => (
                <div
                  key={rel.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between hover:border-[#f26522] transition"
                >
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#07294d] font-bold">
                      {rel.category}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-[#07294d] hover:text-[#f26522] transition line-clamp-2">
                      <Link href={`/courses/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 line-clamp-2">{rel.overview}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">${rel.discountPrice}</span>
                    <Link
                      href={`/courses/${rel.slug}`}
                      className="text-xs font-bold text-[#f26522] hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <JanBaskFooter />

      {/* Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        initialCourse={course.title}
      />

      <CurriculumModal
        isOpen={curriculumModalOpen}
        onClose={() => setCurriculumModalOpen(false)}
        course={course}
      />
    </div>
  )
}
