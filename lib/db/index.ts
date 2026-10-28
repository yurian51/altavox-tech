import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

const databaseUrl = process.env.DATABASE_URL ?? process.env.DATABASE_URL_3 ?? process.env.POSTGRES_URL ?? process.env.POSTGRES_URL_3

export const pool = new Pool({ connectionString: databaseUrl || undefined, max: 5 })
export const db = drizzle(pool, { schema })
export function getDb() { return db }
