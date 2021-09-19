import { useEffect, useState } from 'react'

import { API } from 'config/instanceAxios'

import { LimitList } from 'constants/data'

import Msg from 'constants/messages'

import useFetch from './useFetch'
import { scrollTop } from 'helpers'

const useInitialValues = () => {
  const [pokemons, setPokemons] = useState([])
	const [notFound, setNotFound] = useState(null)
	const [error, setError] = useState(null)
	const { fetchEndpoint: getAllPokemons } = useFetch(API.all)
	const { fetchEndpoint: getSinglePokemon }  = useFetch(API.single)
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(0)
	const [total, setTotal] = useState(0)
	const [searching, setSearching] = useState(false)
  const minPage = Math.max(page - 1, 0)
  const maxPage = Math.min(page + 1, total - 1)

	const fetchPokemon = async () => {
		setLoading(true)
    try {
      const data = await getAllPokemons({ offset: LimitList * page })
      const { data: { results, count } } = data
      const allDataPromises = results.map(async ({ name }) => await getSinglePokemon({ pokemonName: name }))
      const result = await Promise.all(allDataPromises)
      const listData = result.map((item) => item.data)

      setPokemons(listData)
      setTotal(Math.ceil(count / LimitList))
      setNotFound(false)
    } catch {
      setError(Msg.Error)
    } finally {
      setLoading(false)
    }
	}

  const prevPage = () => {
    scrollTop()
    setPage(minPage)
  }
	const nextPage = () => {
    scrollTop()
    setPage(maxPage)
  }
	
	const onSearch = async (pokemon) => {
		if (!pokemon) fetchPokemon()
    setSearching(true)
    setNotFound(false)
    try {
      const lowercase = pokemon.toLowerCase().trim()
      const results = await getSinglePokemon({ pokemonName: lowercase })
      if (!results) {
        setNotFound(true)
        return
      }
      setPokemons([results.data])
      setNotFound(false)
      setTotal(1)
      setPage(0)
    } catch {
      setError(Msg.Error)
    } finally {
      setSearching(false)
    }
	}

	useEffect(() => {
		if (!searching) {
			fetchPokemon()
		}
	}, [page]) //eslint-disable-line

  return {
    pokemons,
    notFound,
    searching,
    loading,
    page,
    total,
    error,
    onSearch,
    prevPage,
    nextPage
  }
}

export default useInitialValues