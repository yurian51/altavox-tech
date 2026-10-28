import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

export function getDb() {
  const databaseUrl = process.env.DATABASE_URL ?? process.env.POSTGRES_URL
  if (!databaseUrl) return null

  const pool = new Pool({ connectionString: databaseUrl, max: 5 })
  return drizzle(pool, { schema })
}
