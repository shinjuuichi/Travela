// app/layout.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { NotificationProvider } from '@/controller/notificationController'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Metadata
export const metadata: Metadata = {
	// title: process.env.NEXT_PUBLIC_WEB_NAME,
	creator: 'Shinjuuichi',
	description: 'skidididididksididsidi',
}

// Header Component
function Header() {
	return (
		<header className='bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4'>
			<nav className='container mx-auto flex justify-between items-center'>
				<h1 className='text-xl font-bold'>{process.env.NEXT_PUBLIC_WEB_NAME}</h1>
				<ul className='flex space-x-4'>
					<li>
						<Link href='/' className='hover:text-blue-200'>
							Home
						</Link>
					</li>
					<li>
						<Link href='/about' className='hover:text-blue-200'>
							About
						</Link>
					</li>
					<li>
						<Link href='/contact' className='hover:text-blue-200'>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

// Footer Component
function Footer() {
	return (
		<footer className='bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 mt-auto'>
			<div className='container mx-auto text-center'>
				<p>
					© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_WEB_NAME}. All rights reserved.
				</p>
				<div className='mt-2'>
					<Link href='/privacy' className='hover:text-blue-200 mx-2'>
						Privacy Policy
					</Link>
					<Link href='/terms' className='hover:text-blue-200 mx-2'>
						Terms of Service
					</Link>
				</div>
			</div>
		</footer>
	)
}

// Root Layout
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' />
			</head>
			<body className='antialiased flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-blue-900 vsc-initialized'>
				<NotificationProvider>
					<ToastContainer position='top-right' autoClose={3000} />
					<Header />
					<main className='flex-grow'>{children}</main>
					<Footer />
				</NotificationProvider>
			</body>
		</html>
	)
}
