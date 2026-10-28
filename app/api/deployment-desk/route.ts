import { timingSafeEqual } from 'node:crypto'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type VercelDeployment = {
  uid?: string
  id?: string
  name?: string
  url?: string
  state?: string
  readyState?: string
  createdAt?: number
  target?: string | null
  meta?: {
    githubCommitSha?: string
    githubCommitRef?: string
    githubCommitMessage?: string
    githubRepo?: string
    githubOrg?: string
  }
}

function unauthorized() {
  return NextResponse.json(
    { error: 'Deployment desk access is not configured or authorized.' },
    { status: 401, headers: { 'Cache-Control': 'no-store' } },
  )
}

export async function GET(request: Request) {
  const expectedKey = process.env.DEPLOYMENT_DESK_KEY
  const supplied = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '')

  if (!expectedKey || !supplied) return unauthorized()

  const expectedBytes = Buffer.from(expectedKey)
  const suppliedBytes = Buffer.from(supplied)
  if (expectedBytes.length !== suppliedBytes.length || !timingSafeEqual(expectedBytes, suppliedBytes)) {
    return unauthorized()
  }

  const token = process.env.VERCEL_TOKEN
  const projectId = process.env.VERCEL_PROJECT_ID
  const teamId = process.env.VERCEL_TEAM_ID

  if (!token || !projectId) {
    return NextResponse.json(
      { error: 'Live data is not configured. Set VERCEL_TOKEN and VERCEL_PROJECT_ID in the server environment.' },
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const query = new URLSearchParams({ projectId, limit: '10' })
  if (teamId) query.set('teamId', teamId)

  try {
    const response = await fetch(`https://api.vercel.com/v6/deployments?${query.toString()}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
      signal: AbortSignal.timeout(12000),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `Vercel API returned HTTP ${response.status}. Check the server token, team access, and project ID.` },
        { status: 502, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const payload = await response.json() as { deployments?: VercelDeployment[] }
    const deployments = (payload.deployments ?? []).map((item) => ({
      id: item.uid ?? item.id ?? 'unknown',
      name: item.name ?? 'Unnamed deployment',
      url: item.url ? `https://${item.url.replace(/^https?:\/\//, '')}` : null,
      state: item.readyState ?? item.state ?? 'UNKNOWN',
      createdAt: item.createdAt ?? null,
      target: item.target ?? 'preview',
      commit: item.meta?.githubCommitSha ?? null,
      branch: item.meta?.githubCommitRef ?? null,
      message: item.meta?.githubCommitMessage ?? null,
      repository: [item.meta?.githubOrg, item.meta?.githubRepo].filter(Boolean).join('/') || null,
    }))

    return NextResponse.json({
      source: 'Vercel API',
      checkedAt: new Date().toISOString(),
      projectId,
      deployments,
    }, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
  } catch {
    return NextResponse.json(
      { error: 'Unable to reach Vercel API. Check network access and try again.' },
      { status: 502, headers: { 'Cache-Control': 'no-store' } },
    )
  }
}
