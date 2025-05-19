'use client'
import { formatTitle } from '@/utils/util'
import { useEffect, useState } from 'react'

export default function Home() {
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		document.title = formatTitle('Home')

		const name = localStorage.getItem('name')
		const address = localStorage.getItem('address')

		if (!name || !address) {
			setShowModal(true)
		}
	}, [])

	const handleSave = (name: string, address: string) => {
		localStorage.setItem('name', name)
		localStorage.setItem('address', address)
		setShowModal(false)
	}

	return (
		<>
			<div>
				<main>{showModal && <Modal onSave={handleSave} />}</main>
			</div>
		</>
	)
}

function Modal({ onSave }: { onSave: (name: string, address: string) => void }) {
	const [name, setName] = useState('')
	const [address, setAddress] = useState('')

	const handleSubmit = () => {
		if (name && address) {
			onSave(name, address)
		}
	}

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
			}}
		>
			<div
				style={{
					margin: '100px auto',
					padding: '20px',
					background: 'white',
					width: '300px',
					borderRadius: '8px',
				}}
			>
				<h2>Enter Your Information</h2>
				<input
					type='text'
					placeholder='Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					style={{ display: 'block', marginBottom: '10px', width: '100%' }}
				/>
				<input
					type='text'
					placeholder='Address'
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					style={{ display: 'block', marginBottom: '10px', width: '100%' }}
				/>
				<button onClick={handleSubmit} style={{ marginRight: '10px' }}>
					Save
				</button>
			</div>
		</div>
	)
}
