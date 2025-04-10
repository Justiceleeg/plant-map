import { Hono } from 'hono'
import { dinoRouter } from './dinoRouter.ts'

export const routes = new Hono()
	.route('/dinosaurs', dinoRouter)
