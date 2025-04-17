import { getAuth } from '@hono/clerk-auth'
import { Hono } from 'hono'
import { z } from 'zod'
// import { zValidator } from '@hono/zod-validator'
import { getDinosaurs } from '@api/db/queries/index.ts'

import { dinosaurs } from '@api/db/schema/dinosaurs.ts'
import { getDinosaurByName } from '@api/db/queries/dinosaurs.ts'

const Dino = z.object({
	name: z.string(),
	description: z.string(),
})
type Dino = z.infer<typeof Dino>

export const dinoRouter = new Hono()
	.get(
		'/',
		// zValidator(
		// 	'query',
		// 	z.array(Dino),
		// ),
		async (c) => {
			const auth = getAuth(c)

			if (!auth?.userId) {
				console.log('not logged in!')
			} else {
				console.log('logged in!')
			}
			const dinosaurs = await getDinosaurs()
			return c.json(dinosaurs)
		},
	)
	.get(
		'/:dinosaur',
		// zValidator(
		// 	'query',
		// 	Dino,
		// ),
		async (c) => {
			if (!c?.req.param('dinosaur')) {
				return c.text('No dinosaur name provided.')
			}
			const dinoInput = c?.req.param('dinosaur')
			const dinosaur = await getDinosaurByName(dinoInput)

			return dinosaur ? c.json(dinosaur) : c.text('No dinosaur found')
		},
	)
