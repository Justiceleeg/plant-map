import { Hono } from 'hono'
import { cors } from 'hono/cors'
import dinosaursRoutes from './dinosaurs/index.ts'

const app = new Hono()

app.use('*', cors())

app.route('/dinosaurs', dinosaursRoutes)

export default app
