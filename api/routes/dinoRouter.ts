import { getAuth } from '@hono/clerk-auth'
import { Hono } from 'hono'
import { z } from 'zod'
// import { zValidator } from '@hono/zod-validator'

import dinosaurs from './data.json' with { type: 'json' }

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
		(c) => {
			const auth = getAuth(c)

			if (!auth?.userId) {
				console.log('not logged in!')
			} else {
				console.log('logged in!')
			}
			return c.json(dinosaurs)
		},
	)
	.get(
		'/:dinosaur',
		// zValidator(
		// 	'query',
		// 	Dino,
		// ),
		(c) => {
			if (!c?.req.param('dinosaur')) {
				return c.text('No dinosaur name provided.')
			}
			const dinoInput = c?.req.param('dinosaur')
			const dinosaur = dinosaurs.find((item: Dino) => item.name.toLowerCase() === dinoInput.toLowerCase())

			return dinosaur ? c.json(dinosaur) : c.text('No dinosaur found')
		},
	)
