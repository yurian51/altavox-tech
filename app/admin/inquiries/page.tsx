import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { inquiries } from '@/lib/db/schema'
import { desc } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { AdminSignOut } from '@/components/admin-sign-out'

export default async function AdminInquiriesPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/sign-in')
  const rows = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt)).limit(100)
  return <main className="min-h-screen bg-[#030812] px-6 py-12 text-white"><div className="mx-auto max-w-6xl"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Protected operations</p><h1 className="mt-3 text-3xl font-semibold">Inquiries</h1><p className="mt-2 text-sm text-slate-400">Signed in as {session.user.email}</p></div><AdminSignOut /></div><div className="mt-8 overflow-x-auto rounded-2xl border border-white/10"><table className="w-full min-w-[720px] text-left text-sm"><thead className="border-b border-white/10 bg-white/[0.04] text-xs uppercase tracking-wider text-slate-500"><tr><th className="p-4">Received</th><th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Service</th><th className="p-4">Status</th></tr></thead><tbody>{rows.map((row: any) => <tr key={row.id} className="border-b border-white/5"><td className="p-4 text-slate-400">{row.createdAt?.toLocaleString ? row.createdAt.toLocaleString() : String(row.createdAt)}</td><td className="p-4">{row.name}</td><td className="p-4 text-slate-300">{row.email}</td><td className="p-4 text-slate-300">{row.service ?? '—'}</td><td className="p-4"><span className="rounded-full bg-cyan-300/10 px-2 py-1 text-xs text-cyan-200">{row.status}</span></td></tr>)}{rows.length === 0 && <tr><td colSpan={5} className="p-10 text-center text-slate-500">No inquiries yet.</td></tr>}</tbody></table></div></div></main>
}
