'use client'

import { formatTitle } from '@/utils/util'
import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFound() {
	useEffect(() => {
		document.title = formatTitle('Not Found')
	}, [])

	const styles = {
		page404: {
			padding: '40px 0',
			background: '#fff',
			fontFamily: "'Arvo', serif",
		},
		image: {
			width: '100%',
			maxWidth: '400px',
		},
		bg404: {
			backgroundImage:
				'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
			height: '400px',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
		},
		title: {
			fontSize: '80px',
		},
		link404: {
			color: '#fff',
			padding: '10px 20px',
			background: '#39ac31',
			margin: '20px 0',
			display: 'inline-block',
			textDecoration: 'none',
			borderRadius: '5px',
		},
		contentBox: {
			marginTop: '-50px',
		},
	}

	return (
		<section style={styles.page404}>
			<div style={{ textAlign: 'center' }}>
				<div style={styles.bg404}>
					<h1 style={styles.title}>404</h1>
				</div>
				<div style={styles.contentBox}>
					<h3>The page you&apos;re looking for is not found</h3>
					<Link href='/' style={styles.link404}>
						Go to Home
					</Link>
				</div>
			</div>
		</section>
	)
}
