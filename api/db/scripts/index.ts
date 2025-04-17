import { db } from '@api/db/index.ts'
import dinosaursData from './data.json' with { type: 'json' }
import { dinosaurs } from '@api/db/schema/index.ts'

await db.insert(dinosaurs).values(dinosaursData)
