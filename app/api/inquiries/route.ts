import { randomUUID } from 'node:crypto'
import { NextResponse } from 'next/server'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const maxFieldLength = 2_000

export async function POST(request: Request) {
  const requestId = randomUUID()
  const body = await request.json().catch(() => null)
  const fields = ['name', 'email', 'description'] as const
  const valid = body && fields.every((field) => typeof body[field] === 'string' && body[field].trim().length > 0 && body[field].length <= maxFieldLength)

  if (!valid || !emailPattern.test(body.email.trim())) {
    return NextResponse.json(
      { error: 'Invalid enquiry', requestId },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  console.warn('[inquiry] delivery unavailable', { requestId })
  return NextResponse.json(
    { error: 'Inquiry delivery is not configured', requestId },
    { status: 503, headers: { 'Cache-Control': 'no-store', 'Retry-After': '3600' } },
  )
}
