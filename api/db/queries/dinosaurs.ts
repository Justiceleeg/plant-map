import { db } from '@api/db/index.ts'
import { dinosaurs, lower } from '@api/db/schema/index.ts'
import { eq } from 'drizzle-orm'

export const getDinosaurs = () => {
	// return await db.select().from(dinosaurs)
	return db.query.dinosaurs.findMany()
}

export const getDinosaurByName = (name: string) => {
	// return await db.select().from(dinosaurs).where(eq(dinosaurs.name, name))
	return db.query.dinosaurs.findFirst({ where: eq(lower(dinosaurs.name), name.toLowerCase()) })
}
