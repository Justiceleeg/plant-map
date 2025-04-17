import { serial, text } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'

export const dinosaurs = pgTable('dinosaurs', {
	id: serial().primaryKey().notNull(),
	name: text(),
	description: text(),
})
