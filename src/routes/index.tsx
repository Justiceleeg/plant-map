import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Dino } from '../types.ts'
import { AppType } from '@api/main.ts'
import { hc } from 'hono/client'

const honoClient = hc<AppType>('/')

export const Route = createFileRoute('/')({
	component: Index,
})

function Index() {
	const { data: dinosaurs } = useQuery({
		queryKey: ['dinosaurs'],
		queryFn: async () => {
			const resp = await honoClient.api.dinosaurs.$get()
			return await resp.json()
		},
	})

	return (
		<main>
			<h1>Welcome to the Dinosaur app</h1>
			<p>Click on a dinosaur below to learn more.</p>
			{dinosaurs && dinosaurs.map((dinosaur: Dino) => {
				return (
					<Link
						to='/$dinosaur'
						params={{ dinosaur: dinosaur.name }}
						key={dinosaur.name}
						className='dinosaur block'
					>
						{dinosaur.name}
					</Link>
				)
			})}
		</main>
	)
}
