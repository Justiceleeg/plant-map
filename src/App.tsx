import { StrictMode } from 'react'
import { ClerkProvider } from '@clerk/clerk-react'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routeTree } from './routeTree.gen.ts'
import './App.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
	throw new Error('Add your Clerk Publishable Key to the .env file')
}

const router = createRouter({ routeTree })
const queryClient = new QueryClient()

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
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</ClerkProvider>
		</StrictMode>
	)
}

export default App
