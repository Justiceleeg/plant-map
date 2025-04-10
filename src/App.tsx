import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'
import Router from './pages/router.tsx'
import './App.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
	throw new Error('Add your Clerk Publishable Key to the .env file')
}

function App() {
	return (
		<StrictMode>
			<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</ClerkProvider>
		</StrictMode>
	)
}

export default App
