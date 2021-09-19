import { useContext, useEffect } from 'react'

import ItemPokemon from '../ItemPokemon'
import Pagination from 'components/Common/Pagination'
import Loader from 'components/Common/Loader'
import NotFound from 'components/Common/NotFound'

import { ContextPoke } from 'context/ContextPoke'

import { scrollTop } from 'helpers'

import { ListPokemonsContent } from './styles'

const ListPokemons = () => {
  const { pokemons, loading, notFound, searching } = useContext(ContextPoke)

  useEffect(() => scrollTop(), [])

  if(searching) return <Loader/>
  if(notFound) return <NotFound/>

  return (
    <>
      <Pagination/>
        {loading ? 
          <Loader/> : 
          <ListPokemonsContent>
            {pokemons?.map((pokemon) => (
                <ItemPokemon 
                key={pokemon.id} 
                {...pokemon}/>
            ))}
          </ListPokemonsContent>
          }
      <Pagination/>
    </>
  )
}

export default ListPokemons
