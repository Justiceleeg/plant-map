import '@std/dotenv/load'
import { Hono } from 'hono'
import { serveStatic } from 'hono/deno'
import { trimTrailingSlash } from 'hono/trailing-slash'
import routes from './routes/index.ts'

const app = new Hono()

app.use(trimTrailingSlash())

app.route('/api', routes)

app.use('/*', serveStatic({ root: './dist' }))
app.notFound((c) => {
	return c.text('Custom 404 Message', 404)
})

Deno.serve(app.fetch)
