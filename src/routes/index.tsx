import { createFileRoute, Link } from '@tanstack/react-router'

import { useEffect, useState } from 'react'
import { Dino } from '../types.ts'

export const Route = createFileRoute('/')({
	component: Index,
})

function Index() {
	const [dinosaurs, setDinosaurs] = useState<Dino[]>([])

	useEffect(() => {
		;(async () => {
			const response = await fetch(`/api/dinosaurs`)
			const allDinosaurs = await response.json() as Dino[]
			setDinosaurs(allDinosaurs)
		})()
	}, [])

	return (
		<main>
			<h1>Welcome to the Dinosaur app</h1>
			<p>Click on a dinosaur below to learn more.</p>
			{dinosaurs.map((dinosaur: Dino) => {
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
