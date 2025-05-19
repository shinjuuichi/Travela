import mongoose from 'mongoose'

declare global {
	namespace NodeJS {
		interface Global {
			mongoose: {
				conn: typeof mongoose | null
				promise: Promise<typeof mongoose> | null
			}
		}
	}
}

// This ensures the file is treated as a module
export {}
