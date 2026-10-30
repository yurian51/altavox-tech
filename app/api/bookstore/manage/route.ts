import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { pool } from '@/lib/db'

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: await headers() })
  const admins = (process.env.BOOKSTORE_ADMIN_EMAILS || '').toLowerCase().split(',').map((value) => value.trim())
  if (!session?.user?.email || !admins.includes(session.user.email.toLowerCase())) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  const body = await request.json()
  const result = await pool.query(
    'INSERT INTO book_products (slug,title,author,description,format,status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id,slug,title,status',
    [body.slug, body.title, body.author, body.description || '', body.format || 'both', 'draft'],
  )
  return NextResponse.json({ product: result.rows[0] }, { status: 201 })
}
