'use client'

import { useRouter } from 'next/navigation'
import { signOut } from '@/lib/auth-client'

export function AdminSignOut() {
  const router = useRouter()
  return <button onClick={async () => { await signOut(); router.push('/sign-in'); router.refresh() }} className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-cyan-300/40 hover:text-white">Sign out</button>
}
