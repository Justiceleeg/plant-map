import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import type * as schema from './schema/index.ts'

export type InsertDinosaur = InferInsertModel<typeof schema.dinosaurs>
export type SelectDinosaur = InferSelectModel<typeof schema.dinosaurs>
