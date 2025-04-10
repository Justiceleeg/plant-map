import '@std/dotenv/load'
import { Hono } from 'hono'
import { serveStatic } from 'hono/deno'
import { cors } from 'hono/cors'
import { clerkMiddleware } from '@hono/clerk-auth'

import { trimTrailingSlash } from 'hono/trailing-slash'
import { routes } from './routes/index.ts'

const app = new Hono()
	.use(trimTrailingSlash())
	.use('*', serveStatic({ root: './dist' }))
	.use('*', cors())
	.use('*', clerkMiddleware())
	.route('/api', routes)
	.notFound((c) => {
		return c.text('Custom 404 Message', 404)
	})

export type AppType = typeof app

Deno.serve(app.fetch)
