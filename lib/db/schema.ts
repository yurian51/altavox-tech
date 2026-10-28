import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const inquiries = pgTable('inquiries', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  organization: text('organization'),
  service: text('service'),
  projectType: text('project_type'),
  timeline: text('timeline'),
  description: text('description').notNull(),
  status: text('status').notNull().default('new'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
