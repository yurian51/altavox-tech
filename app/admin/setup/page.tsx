import { redirect } from 'next/navigation'
import AdminSetupForm from './setup-form'

export const dynamic = 'force-dynamic'

export default function AdminSetupPage() {
  // Keep the one-time bootstrap route closed unless explicitly enabled during
  // a controlled deployment window by an operator.
  if (process.env.ADMIN_SETUP_ENABLED !== 'true') redirect('/sign-in')
  return <AdminSetupForm />
}
