'use client'

import Link from 'next/link'
import { Clock3, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react'
import { CourseItem } from '@/lib/courses-data'

export function AltavoxCourseCard({
  course,
  onViewCurriculum,
  onBookDemo
}: {
  course: CourseItem
  onViewCurriculum?: (course: CourseItem) => void
  onBookDemo?: (courseTitle: string) => void
}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#f26522] hover:shadow-xl">
      <div>
        {/* Top Badges & Category */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#07294d]">
            {course.category}
          </span>
          {course.badge && (
            <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-[11px] font-bold text-[#f26522]">
              {course.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-3 text-lg font-bold text-[#07294d] line-clamp-2 hover:text-[#f26522] transition">
          <Link href={`/courses/${course.slug}`}>
            {course.title}
          </Link>
        </h3>

        {/* Overview snippet */}
        <p className="mt-3 text-xs leading-5 text-slate-600 line-clamp-3">
          {course.overview}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-slate-100 py-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-[#f26522]" /> {course.duration}</span>
          <span className="inline-flex items-center gap-2"><BookOpen className="size-4 text-[#f26522]" /> Structured curriculum</span>
        </div>

        {/* Key skills pills */}
        <div className="mt-4 flex flex-wrap gap-1">
          {course.skillsCovered.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
            >
              {skill}
            </span>
          ))}
          {course.skillsCovered.length > 3 && (
            <span className="text-[10px] text-slate-400 self-center">
              +{course.skillsCovered.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-4">
        <p className="mb-4 text-xs leading-5 text-slate-500">Contact Altavox Tech to confirm current fees, training format, and upcoming availability.</p>
        <div className="grid grid-cols-2 gap-2">
          {onViewCurriculum ? <button type="button" onClick={() => onViewCurriculum(course)} className="border border-slate-300 py-2.5 text-xs font-bold text-slate-700 transition hover:border-[#07294d] hover:bg-slate-50">View syllabus</button> : <Link href={`/courses/${course.slug}`} className="border border-slate-300 py-2.5 text-xs font-bold text-slate-700 text-center">Course details</Link>}
          <Link href={`/contact?course=${encodeURIComponent(course.shortTitle)}`} className="flex items-center justify-center gap-1 bg-[#f26522] py-2.5 text-xs font-bold text-white transition hover:bg-[#e05312]">Enquire <ArrowRight className="size-3.5" /></Link>
        </div>
      </div>
    </div>
  )
}
