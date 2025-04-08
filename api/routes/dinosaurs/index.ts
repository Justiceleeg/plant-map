import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import { Hono } from 'hono'
import dinosaurs from './data.json' with { type: 'json' }
import { Dino } from '../../../src/types.ts'

const app = new Hono()

app.use('*', clerkMiddleware())

app.get('/', (c) => {
	const auth = getAuth(c)

	if (!auth?.userId) {
		console.log('not logged in!')
	} else {
		console.log('logged in!')
	}
	return c.json(dinosaurs)
})

app.get('/:dinosaur', (c) => {
	if (!c?.req.param('dinosaur')) {
		return c.text('No dinosaur name provided.')
	}
	const dinoInput = c?.req.param('dinosaur')
	const dinosaur = dinosaurs.find((item: Dino) => item.name.toLowerCase() === dinoInput.toLowerCase())

	return dinosaur ? c.json(dinosaur) : c.text('No dinosaur found')
})

export default app
