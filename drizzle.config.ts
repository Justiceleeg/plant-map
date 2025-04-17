import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	out: './api/db/drizzle',
	schema: './api/db/schema/index.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: Deno.env.get('DATABASE_URL')!,
	},
})
