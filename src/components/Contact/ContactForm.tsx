'use client'

import { useState, useRef, useEffect } from 'react'
import { useNotification } from '@/controller/notificationController'
import TextInput from '@/components/common/Input/TextInput'
import TextArea from '@/components/common/Input/TextArea'
import Button from '@/components/common/Button/Button'
import { emailSchema, textAreaSchema } from '@/utils/validation'
import { addData } from '../../../apiClient'

export default function ContactForm() {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' })
	const [loading, setLoading] = useState(false)
	const { addNotification } = useNotification()

	const emailInputRef = useRef<{ validateField: () => boolean }>(null)
	const messageInputRef = useRef<{ validateField: () => boolean }>(null)

	useEffect(() => {
		const storedName = localStorage.getItem('name') || ''
		setFormData((prev) => ({ ...prev, name: storedName }))
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const isEmailValid = emailInputRef.current?.validateField() ?? false
		const isMessageValid = messageInputRef.current?.validateField() ?? false

		if (!isEmailValid || !isMessageValid) {
			addNotification('error', 'Please complete the form.')
			return
		}

		setLoading(true)
		try {
			console.log(formData)

			await addData('/api/contact', formData)
			addNotification('success', 'Form submitted successfully!')
			setFormData({ name: localStorage.getItem('name') || '', email: '', message: '' })
		} catch (error) {
			addNotification('error', error instanceof Error ? error.message : 'Something went wrong.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className='max-w-lg mx-auto bg-white-800 p-6 rounded-lg'>
			<div className='mb-4'>
				<label className='block text-gray-300 mb-2'>Email</label>
				<TextInput
					ref={emailInputRef}
					name='email'
					placeholder='Enter your email'
					value={formData.email}
					onChange={handleChange}
					className='w-full text-white'
					validate={emailSchema}
				/>
			</div>
			<div className='mb-4'>
				<label className='block text-gray-300 mb-2'>Message</label>
				<TextArea
					ref={messageInputRef}
					name='message'
					placeholder='Enter your message'
					value={formData.message}
					onChange={handleChange}
					className='w-full text-white'
					validate={textAreaSchema}
				/>
			</div>
			<Button
				type='submit'
				label={loading ? 'Sending...' : 'Send Message'}
				disabled={loading}
				className='w-full'
			/>
		</form>
	)
}
