import React, { useState, forwardRef, useImperativeHandle } from 'react'
import * as yup from 'yup'

interface TextInputProps {
	name: string
	placeholder?: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	className?: string
	type?: string
	disabled?: boolean
	validate?: yup.StringSchema
}

// Define the ref type
interface TextInputRef {
	validateField: () => boolean
}

const TextInput = forwardRef<TextInputRef, TextInputProps>(
	(
		{ name, placeholder, value, onChange, className, type = 'text', disabled = false, validate },
		ref
	) => {
		const [error, setError] = useState<string | null>(null)

		const validateField = () => {
			if (validate) {
				try {
					validate.validateSync(value) // Use sync validation for simplicity
					setError(null)
					return true
				} catch (err) {
					if (err instanceof yup.ValidationError) {
						setError(err.errors[0])
						return false
					}
					console.error('Unexpected validation error:', err)
					return false
				}
			}
			return true // If no validate prop, assume valid
		}

		useImperativeHandle(ref, () => ({
			validateField,
		}))

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value
			onChange(e)

			if (validate) {
				validate
					.validate(newValue)
					.then(() => setError(null))
					.catch((err) => {
						if (err instanceof yup.ValidationError) {
							setError(err.errors[0])
						} else {
							console.error('Unexpected validation error:', err)
						}
					})
			}
		}

		return (
			<div>
				<input
					name={name}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					disabled={disabled}
					className={`border p-2 rounded ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''} ${
						error ? 'border-red-500' : ''
					} ${className || ''}`}
				/>
				{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
			</div>
		)
	}
)

TextInput.displayName = 'TextInput'

export default TextInput
