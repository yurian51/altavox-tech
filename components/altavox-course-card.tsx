'use client'

import Link from 'next/link'
import { Star, Clock3, Calendar, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react'
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

        {/* Ratings and Stats */}
        <div className="mt-2.5 flex items-center gap-2 text-xs">
          <div className="flex items-center text-amber-500 font-bold">
            <Star className="size-3.5 fill-amber-400 text-amber-400 mr-1" />
            <span>{course.rating}</span>
          </div>
          <span className="text-slate-400">·</span>
          <span className="text-slate-500 font-medium">({course.reviewCount.toLocaleString()} reviews)</span>
          <span className="text-slate-400">·</span>
          <span className="text-slate-500">{course.enrolledStudents.toLocaleString()}+ learners</span>
        </div>

        {/* Overview snippet */}
        <p className="mt-3 text-xs leading-5 text-slate-600 line-clamp-3">
          {course.overview}
        </p>

        {/* Course Duration & Batch */}
        <div className="mt-4 rounded-xl bg-slate-50 p-3 border border-slate-100 text-xs text-slate-700 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock3 className="size-3.5 text-[#f26522]" /> Duration:
            </span>
            <span className="font-bold text-[#07294d]">{course.duration} ({course.liveHours})</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-500">
              <Calendar className="size-3.5 text-[#f26522]" /> Next Batch:
            </span>
            <span className="font-bold text-emerald-600">{course.nextBatch}</span>
          </div>
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

      {/* Pricing & Footer Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-xs text-slate-400 line-through mr-2">
              ${course.originalPrice}
            </span>
            <span className="text-2xl font-black text-[#07294d]">
              ${course.discountPrice}
            </span>
          </div>
          <span className="text-[11px] font-bold text-emerald-600">
            {Math.round(((course.originalPrice - course.discountPrice) / course.originalPrice) * 100)}% OFF
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {onViewCurriculum ? (
            <button
              type="button"
              onClick={() => onViewCurriculum(course)}
              className="rounded-xl border border-slate-300 py-2.5 text-xs font-bold text-slate-700 hover:border-[#07294d] hover:bg-slate-50 transition text-center"
            >
              Syllabus
            </button>
          ) : (
            <Link
              href={`/courses/${course.slug}`}
              className="rounded-xl border border-slate-300 py-2.5 text-xs font-bold text-slate-700 hover:border-[#07294d] hover:bg-slate-50 transition text-center"
            >
              Details
            </Link>
          )}

          {onBookDemo ? (
            <button
              type="button"
              onClick={() => onBookDemo(course.title)}
              className="rounded-xl bg-[#f26522] py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 hover:bg-[#e05312] transition text-center"
            >
              Free Demo
            </button>
          ) : (
            <Link
              href={`/courses/${course.slug}`}
              className="rounded-xl bg-[#f26522] py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 hover:bg-[#e05312] transition text-center flex items-center justify-center gap-1"
            >
              Enroll <ArrowRight className="size-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
