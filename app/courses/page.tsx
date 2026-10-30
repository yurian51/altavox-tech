'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, BookOpen, Star, Clock3, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import { AltavoxHeader } from '@/components/altavox-header'
import { AltavoxFooter } from '@/components/altavox-footer'
import { AltavoxCourseCard } from '@/components/altavox-course-card'
import { DemoModal } from '@/components/demo-modal'
import { CurriculumModal } from '@/components/curriculum-modal'
import { CareerAdvisorModal } from '@/components/career-advisor-modal'
import { coursesData, courseCategories, CourseItem } from '@/lib/courses-data'

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Courses')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'priceAsc' | 'priceDesc'>('popular')
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [selectedCourseForDemo, setSelectedCourseForDemo] = useState<string>('')
  const [curriculumModalOpen, setCurriculumModalOpen] = useState(false)
  const [selectedCourseForCurriculum, setSelectedCourseForCurriculum] = useState<CourseItem | null>(null)
  const [advisorModalOpen, setAdvisorModalOpen] = useState(false)

  // Filter & sort
  const filtered = coursesData.filter((course) => {
    const matchesCategory = selectedCategory === 'All Courses' || course.category === selectedCategory
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skillsCovered.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedCourses = [...filtered].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'priceAsc') return a.discountPrice - b.discountPrice
    if (sortBy === 'priceDesc') return b.discountPrice - a.discountPrice
    return b.enrolledStudents - a.enrolledStudents
  })

  function handleOpenDemo(courseTitle?: string) {
    if (courseTitle) setSelectedCourseForDemo(courseTitle)
    setDemoModalOpen(true)
  }

  function handleOpenCurriculum(course: CourseItem) {
    setSelectedCourseForCurriculum(course)
    setCurriculumModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <AltavoxHeader />

      <main className="flex-1 pb-24">
        {/* Breadcrumb & Hero Header */}
        <section className="bg-[#07294d] text-white py-12 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <span className="text-[#f26522] font-semibold">All Courses</span>
            </div>

            <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold">
                  Professional IT Courses & Certification Preparation
                </h1>
                <p className="mt-2 text-sm text-slate-300 max-w-2xl">
                  Build practical skills through structured courses in cloud computing, cybersecurity, and CRM administration. Each course includes a clear syllabus, guided labs, and practical assignments.
                </p>
              </div>

              <button
                onClick={() => setAdvisorModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#f26522] px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-[#e05312] transition self-start md:self-auto"
              >
                <Sparkles className="size-4" />
                <span>Need Guidance? Ask AI Advisor</span>
              </button>
            </div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search box */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by course name or skill..."
                  className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#f26522] focus:outline-none"
                />
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-[#f26522]"
                >
                  <option value="popular">Most Popular (Enrolled)</option>
                  <option value="rating">Highest Rated (4.9+)</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                </select>
              </div>

            </div>

            {/* Category Filter Pills */}
            <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-4 border-t border-slate-100">
              {courseCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-[#07294d] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count indicator */}
          <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
            <span>Showing <strong className="text-slate-800">{sortedCourses.length}</strong> professional courses</span>
            <span>Explore course details, syllabus and available training options</span>
          </div>

          {/* Courses Grid */}
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sortedCourses.map((course) => (
              <AltavoxCourseCard
                key={course.id}
                course={course}
                onViewCurriculum={handleOpenCurriculum}
                onBookDemo={handleOpenDemo}
              />
            ))}
          </div>

          {sortedCourses.length === 0 && (
            <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center">
              <BookOpen className="mx-auto size-12 text-slate-300" />
              <h3 className="mt-4 text-base font-bold text-slate-800">No matching courses found</h3>
              <p className="mt-1 text-xs text-slate-500">Try adjusting your search criteria or category filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All Courses')
                  setSearchQuery('')
                }}
                className="mt-5 rounded-xl bg-[#07294d] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#051c36]"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </main>

      <AltavoxFooter />

      {/* Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        initialCourse={selectedCourseForDemo}
      />

      <CurriculumModal
        isOpen={curriculumModalOpen}
        onClose={() => setCurriculumModalOpen(false)}
        course={selectedCourseForCurriculum}
      />

      <CareerAdvisorModal
        isOpen={advisorModalOpen}
        onClose={() => setAdvisorModalOpen(false)}
        onSelectCourse={(slug) => {
          setAdvisorModalOpen(false)
          window.location.href = `/courses/${slug}`
        }}
      />
    </div>
  )
}
