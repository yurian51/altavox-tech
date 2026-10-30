import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

const databaseUrl = process.env.DATABASE_URL ?? process.env.DATABASE_URL_3 ?? process.env.POSTGRES_URL ?? process.env.POSTGRES_URL_3

// Never silently replace persistent storage with mock data. A missing or unreachable
// database must surface as an operational error rather than accepting lost writes.
export const pool = new Pool({
  ...(databaseUrl ? { connectionString: databaseUrl } : {}),
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
  allowExitOnIdle: process.env.NODE_ENV !== 'production',
})

export const db = drizzle(pool, { schema })

export function getDb() {
  return db
}
