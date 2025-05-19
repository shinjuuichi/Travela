import mongoose from 'mongoose'

const MONGODB_URI = process.env.DB_URL
if (!MONGODB_URI) {
	throw new Error('Please define the DB_URL environment variable inside .env')
}

declare global {
	// eslint-disable-next-line no-var
	var _mongoose: {
		conn: typeof mongoose | null
		promise: Promise<typeof mongoose> | null
	}
}

const cached = globalThis._mongoose || (globalThis._mongoose = { conn: null, promise: null })

export async function connectToDatabase() {
	if (cached.conn) {
		console.log('Using existing MongoDB connection')
		return cached.conn
	}

	if (!cached.promise) {
		console.log('Connecting to MongoDB...')
		cached.promise = mongoose
			.connect(MONGODB_URI ?? '', {
				dbName: 'Boilerplate',
				bufferCommands: false,
			})
			.then((mongooseInstance) => {
				console.log('Successfully connected to MongoDB')
				return mongooseInstance
			})
			.catch((error) => {
				console.error('MongoDB connection error:', error)
				throw error
			})
	}

	cached.conn = await cached.promise
	return cached.conn
}
