import { pgTable, text, timestamp, uuid, numeric, jsonb } from 'drizzle-orm/pg-core'

export const inquiries = pgTable('inquiries', {
  id: uuid('id').defaultRandom().primaryKey(), name: text('name').notNull(), email: text('email').notNull(), organization: text('organization'), service: text('service'), projectType: text('project_type'), timeline: text('timeline'), description: text('description').notNull(), status: text('status').notNull().default('new'), createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})

export const devices = pgTable('devices', {
  id: uuid('id').defaultRandom().primaryKey(), name: text('name').notNull(), provider: text('provider'), externalId: text('external_id'), status: text('status').notNull().default('unknown'), createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})

export const telemetry = pgTable('telemetry', {
  id: uuid('id').defaultRandom().primaryKey(), deviceId: uuid('device_id').notNull(), metric: text('metric').notNull(), value: numeric('value'), unit: text('unit'), observedAt: timestamp('observed_at', { withTimezone: true }).notNull().defaultNow(),
})

export const networkCommands = pgTable('network_commands', {
  id: uuid('id').defaultRandom().primaryKey(), deviceId: uuid('device_id'), command: text('command').notNull(), status: text('status').notNull().default('queued'), requestedAt: timestamp('requested_at', { withTimezone: true }).notNull().defaultNow(), completedAt: timestamp('completed_at', { withTimezone: true }),
})

export const auditLogs = pgTable('audit_logs', {
  id: uuid('id').defaultRandom().primaryKey(), action: text('action').notNull(), actor: text('actor'), resourceType: text('resource_type'), resourceId: uuid('resource_id'), outcome: text('outcome').notNull(), metadata: jsonb('metadata').notNull().default({}), createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
