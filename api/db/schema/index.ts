import { AnyPgColumn } from 'drizzle-orm/pg-core'
import { SQL, sql } from 'drizzle-orm'

export * from './dinosaurs.ts'

// custom lower function
export function lower(email: AnyPgColumn): SQL {
	return sql`lower(${email})`
}
