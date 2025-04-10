import { Route, Routes } from 'react-router'
import Index from './index.tsx'
import Dinosaur from './Dinosaur.tsx'

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Index />} />
			<Route path='/:selectedDinosaur' element={<Dinosaur />} />
		</Routes>
	)
}

export default Router
