'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signUp } from '@/lib/auth-client'

const allowedAdminEmail = 'yurianarshad@gmail.com'

export default function AdminSetupPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if ((event.nativeEvent as KeyboardEvent).isComposing) return
    setPending(true)
    setError('')
    const data = new FormData(event.currentTarget)
    const email = String(data.get('email')).trim().toLowerCase()
    if (email !== allowedAdminEmail) {
      setError('This setup link is not available for that email.')
      setPending(false)
      return
    }
    const result = await signUp.email({ email, password: String(data.get('password')), name: 'Altavox Admin' })
    if (result.error) setError('Account setup failed. The account may already exist.')
    else { router.push('/admin/inquiries'); router.refresh() }
    setPending(false)
  }

  return <main className="min-h-screen bg-[#030812] px-6 py-20 text-white"><div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-8"><p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Altavox control plane</p><h1 className="mt-4 text-3xl font-semibold">Admin account setup</h1><p className="mt-3 text-sm text-slate-400">One-time setup for the authorized operations administrator.</p><form onSubmit={submit} className="mt-8 space-y-5"><label className="block text-sm text-slate-300">Email<input required name="email" type="email" autoComplete="email" className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-white outline-none focus:border-cyan-300" /></label><label className="block text-sm text-slate-300">Password<input required minLength={8} name="password" type="password" autoComplete="new-password" className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-white outline-none focus:border-cyan-300" /></label>{error && <p role="alert" className="text-sm text-rose-300">{error}</p>}<button disabled={pending} className="w-full rounded-lg bg-cyan-300 px-4 py-3 font-semibold text-slate-950 disabled:opacity-50">{pending ? 'Creating account…' : 'Create admin account'}</button></form></div></main>
}
