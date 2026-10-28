import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

let db: ReturnType<typeof drizzle<typeof schema>> | null = null

export function getDb() {
  if (db) return db

  const databaseUrl = process.env.DATABASE_URL ?? process.env.DATABASE_URL_3 ?? process.env.POSTGRES_URL ?? process.env.POSTGRES_URL_3
  if (!databaseUrl) return null

  const pool = new Pool({ connectionString: databaseUrl, max: 5 })
  db = drizzle(pool, { schema })
  return db
}
