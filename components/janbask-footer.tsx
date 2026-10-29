import Link from 'next/link'
import { Phone, Mail, MapPin, ShieldCheck, Award, Star, CheckCircle2, Terminal, Network, Server, Layers } from 'lucide-react'
import { coursesData } from '@/lib/courses-data'

export function JanBaskFooter() {
  return (
    <footer className="bg-[#051c36] text-slate-300 pt-16 pb-12 border-t-4 border-[#f26522]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Strip in JanBask Style */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-white/5 text-[#f26522] border border-white/10">
              <Network className="size-6" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Carrier ISP Automation</p>
              <p className="text-xs text-slate-400">MikroTik RouterOS & M-Pesa reconciliation</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-white/5 text-[#f26522] border border-white/10">
              <Layers className="size-6" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Unified School SIMS</p>
              <p className="text-xs text-slate-400">Student registry & automated fee tracking</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-white/5 text-[#f26522] border border-white/10">
              <Server className="size-6 text-emerald-400" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">99.9% Production SLA</p>
              <p className="text-xs text-slate-400">Engineered for teams that cannot stop</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-white/5 text-[#f26522] border border-white/10">
              <ShieldCheck className="size-6 text-cyan-300" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">System Governance</p>
              <p className="text-xs text-slate-400">Database constraints & strict RBAC security</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10 text-xs">
          
          {/* Col 1: Brand & Contacts */}
          <div>
            <div className="flex items-center">
              <span className="text-2xl font-black tracking-tight text-white">
                Alta<span className="text-[#f26522]">vox</span>
              </span>
              <span className="ml-1.5 rounded bg-[#f26522] px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-white">
                TECH
              </span>
            </div>
            <p className="mt-3 text-slate-400 leading-relaxed text-xs">
              Altavox Tech designs software platforms, ISP billing systems, and connected operational tools that help organizations run smoothly, reliably, and without guesswork.
            </p>

            <div className="mt-5 space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="size-3.5 text-[#f26522]" />
                <span>US Desk: +1 908-652-6151</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-3.5 text-[#f26522]" />
                <span>engineering@altavox.space</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="size-3.5 text-[#f26522] shrink-0 mt-0.5" />
                <span>HQ: 1050 Route 22 West, Bridgewater, NJ 08807</span>
              </div>
            </div>
          </div>

          {/* Col 2: Production Systems & Platforms */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white text-xs">Production Platforms</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/courses/jaslyn-net" className="hover:text-[#f26522] transition">
                  Jaslyn Net — ISP Operations & Billing
                </Link>
              </li>
              <li>
                <Link href="/courses/sammena" className="hover:text-[#f26522] transition">
                  Sammena Pre & Primary — School SIMS
                </Link>
              </li>
              <li>
                <Link href="/courses/netbill-noc" className="hover:text-[#f26522] transition">
                  NetBill-NOC — Telecom RADIUS & SNMP
                </Link>
              </li>
              <li>
                <Link href="/courses/nexora-cloud" className="hover:text-[#f26522] transition">
                  Nexora Cloud — Deployment Engine
                </Link>
              </li>
              <li>
                <Link href="/computer" className="text-[#f26522] font-semibold hover:underline flex items-center gap-1">
                  <Terminal className="size-3" />
                  <span>Open Computer Console</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Engineering Services */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white text-xs">Engineering Services</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/services" className="hover:text-[#f26522] transition">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f26522] transition">
                  ISP Billing & MikroTik Integrations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f26522] transition">
                  Cloud Deployment & Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f26522] transition">
                  Network Engineering & NOC Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f26522] transition">
                  Database Architecture & Data Pipelines
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-cyan-300 font-semibold hover:underline">
                  Altavox Tech Academy & Master Tracks →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Operational Governance & Company */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white text-xs">Altavox Governance</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/about" className="hover:text-[#f26522] transition">
                  About Altavox & Principles
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#f26522] transition">
                  Launchpad & Live Projects
                </Link>
              </li>
              <li>
                <Link href="/deployments" className="hover:text-[#f26522] transition">
                  Deployments & Operations
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#f26522] transition">
                  Privacy Notice & Data Security
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#f26522] transition">
                  Terms & Service SLA
                </Link>
              </li>
              <li>
                <Link href="/admin/inquiries" className="text-slate-400 hover:text-white transition">
                  Protected Operations Admin
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Altavox Tech, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-200 transition">Privacy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-slate-200 transition">Terms of Service</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-slate-200 transition">Engineering Desk</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
