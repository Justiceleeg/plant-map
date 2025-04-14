import { StrictMode } from 'react'
import { ClerkProvider } from '@clerk/clerk-react'
import { createRouter, RouterProvider } from '@tanstack/react-router'
// import Router from './pages/router.tsx'
import './App.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
	throw new Error('Add your Clerk Publishable Key to the .env file')
}

// Import the generated route tree
import { routeTree } from './routeTree.gen.ts'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

function App() {
	return (
		<StrictMode>
			<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
				<RouterProvider router={router} />
			</ClerkProvider>
		</StrictMode>
	)
}

export default App
