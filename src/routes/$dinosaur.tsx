import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Dino } from '../types.ts'

export const Route = createFileRoute('/$dinosaur')({
	component: Dinosaur,
})

function Dinosaur() {
	const { dinosaur: selectedDinosaur } = Route.useParams()
	const [dinosaur, setDino] = useState<Dino>({ name: '', description: '' })

	useEffect(() => {
		;(async () => {
			const resp = await fetch(`/api/dinosaurs/${selectedDinosaur}`)
			const dino = await resp.json() as Dino
			setDino(dino)
		})()
	}, [selectedDinosaur])

	return (
		<div>
			<h1>{dinosaur.name}</h1>
			<p>{dinosaur.description}</p>
			<Link to='/'>🠠 Back to all dinosaurs</Link>
		</div>
	)
}
