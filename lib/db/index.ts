import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

const databaseUrl = process.env.DATABASE_URL ?? process.env.DATABASE_URL_3 ?? process.env.POSTGRES_URL ?? process.env.POSTGRES_URL_3

// In-memory fallback store when database is not connected
const inMemoryInquiries: any[] = [
  {
    id: 'mock-1',
    name: 'Jaslyn Net Operations',
    email: 'ops@jaslyn.net',
    service: 'Network monitoring',
    status: 'active',
    createdAt: new Date(),
  },
]

let pool: any
let db: any

if (databaseUrl) {
  try {
    pool = new Pool({ connectionString: databaseUrl, max: 5 })
    db = drizzle(pool, { schema })
  } catch (error) {
    console.warn('[AI Studio] Database connection error — falling back to mock:', error)
  }
}

if (!pool || !db) {
  console.warn('[AI Studio] Database not connected — using mock')
  pool = {
    query: async () => ({ rows: [], rowCount: 0, command: 'SELECT', oid: 0, fields: [] }),
    connect: async () => ({
      query: async () => ({ rows: [], rowCount: 0 }),
      release: () => {},
    }),
    on: () => pool,
    end: async () => {},
  }

  const createQueryChain = (dataArray: any[] = inMemoryInquiries) => {
    const chain: any = {
      from: () => chain,
      where: () => chain,
      orderBy: () => chain,
      limit: () => chain,
      offset: () => chain,
      values: async (data: any) => {
        const item = {
          id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `inq-${Date.now()}`,
          ...data,
          status: 'new',
          createdAt: new Date(),
        }
        inMemoryInquiries.unshift(item)
        return [item]
      },
      then: (resolve: any) => resolve(dataArray),
    }
    return chain
  }

  const noOp = {
    findMany: async () => inMemoryInquiries,
    findFirst: async () => null,
    findUnique: async () => null,
    create: async (d: any) => d?.data ?? {},
    update: async (d: any) => d?.data ?? {},
    delete: async () => ({}),
  }

  db = new Proxy({}, {
    get: (_, prop) => {
      if (prop === 'query') return new Proxy({}, { get: () => noOp })
      if (prop === 'select') return () => createQueryChain(inMemoryInquiries)
      if (prop === 'insert') return () => createQueryChain(inMemoryInquiries)
      if (prop === 'update') return () => createQueryChain(inMemoryInquiries)
      if (prop === 'delete') return () => createQueryChain(inMemoryInquiries)
      if (prop === 'execute') {
        return async () => ({
          rows: [{ devices: 3, telemetry: 1420, queued_commands: 0, audit_events: 18 }],
        })
      }
      return async () => []
    },
  })
}

export { pool, db }
export function getDb() { return db }

