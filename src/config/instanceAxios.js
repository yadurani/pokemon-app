import { create } from 'axios'

const baseURL = 'https://pokeapi.co/api/v2'

export const API = {
	all: ({ limit, offset } = { limit: 20, offset: 0 }) => `${baseURL}/pokemon/?limit=${limit}&offset=${offset}`,
	single: ({ pokemonName }) => `${baseURL}/pokemon/${pokemonName}`
}

const client = create({
  baseURL
})

export default client