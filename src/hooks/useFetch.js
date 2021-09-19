import client from 'config/instanceAxios'
import { useState } from 'react'

const useFetch = (endpoint) => {
	const [error, setError] = useState({ haveError: false, errorInfo: null })

	const fetchEndpoint = async (fetchParams) => {
		try {
			const url = endpoint instanceof Function ? endpoint(fetchParams) : endpoint
			const data = await client.get(url)
			return data
		} catch (error) {
			setError(prevState => ({ ...prevState, haveError: true, erroInfo: error }))
		}
	};

	return { fetchEndpoint, error }
}

export default useFetch
