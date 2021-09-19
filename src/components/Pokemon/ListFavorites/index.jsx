import React, { useContext } from 'react'
import ItemPokemon from '../ItemPokemon'
import { ContextFavorite } from 'context/ContextFavorite'
import { ListPokemonsContent } from '../ListPokemons/styles'
import Empty from 'components/Common/Empty'

const ListFavorites = () => {
  const { favorites } = useContext(ContextFavorite)

  if(!favorites.length) return <Empty/>
  
  return (
    <div>
      <ListPokemonsContent minHeight="70vh">
        {favorites?.map((pokemon) => (
          <ItemPokemon 
          key={pokemon.id} 
          {...pokemon}/>
        ))}
      </ListPokemonsContent>
    </div>
  )
}

export default ListFavorites
