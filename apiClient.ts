export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface ApiRequestOptions<TBody = unknown> {
	method: RequestMethod
	endpoint: string
	body?: TBody
	headers?: Record<string, string>
}

export async function apiClient<T, TBody = unknown>(options: ApiRequestOptions<TBody>): Promise<T> {
	const { method, endpoint, body, headers } = options

	const config: RequestInit = {
		method,
		headers: {
			'Content-Type': 'application/json',
			...(headers || {}),
		},
		body: body ? JSON.stringify(body) : undefined,
	}

	try {
		const response = await fetch(endpoint, config)

		if (!response.ok) {
			console.log(response)
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		return (await response.json()) as T
	} catch (error) {
		console.error('API call failed:', error)
		throw error
	}
}

export async function getListData<T>(
	endpoint: string,
	headers?: Record<string, string>
): Promise<T> {
	return apiClient<T>({ method: 'GET', endpoint, headers })
}

export async function getById<T>(
	endpoint: string,
	id: string | number,
	headers?: Record<string, string>
): Promise<T> {
	return apiClient<T>({ method: 'GET', endpoint: `${endpoint}/${id}`, headers })
}

export async function patchData<T, TBody = unknown>(
	endpoint: string,
	id: string | number,
	body: TBody,
	headers?: Record<string, string>
): Promise<T> {
	return apiClient<T, TBody>({
		method: 'PATCH',
		endpoint: `${endpoint}/${id}`,
		body,
		headers,
	})
}

export async function deleteData<T>(
	endpoint: string,
	id: string | number,
	headers?: Record<string, string>
): Promise<T> {
	return apiClient<T>({ method: 'DELETE', endpoint: `${endpoint}/${id}`, headers })
}

export async function addData<T, TBody = unknown>(
	endpoint: string,
	body: TBody,
	headers?: Record<string, string>
): Promise<T> {
	return apiClient<T, TBody>({
		method: 'POST',
		endpoint,
		body,
		headers,
	})
}
