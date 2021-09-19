import { useEffect, useState } from 'react'

import BtnFav from 'components/Common/BtnFavorite'
import Error404 from 'components/Common/Error404'
import Loader from 'components/Common/Loader'

import { API } from 'config/instanceAxios'

import useFetch from 'hooks/useFetch'

import { ItemType, ListTypes, TitlePokemon } from '../ItemPokemon/styles'
import { DetailContainer, Features, ImageContainer } from './styles'

const DetailPokemon = ({ name }) => {
  const { fetchEndpoint: getSinglePokemon } = useFetch(API.single)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [pokemon, setPokemon] = useState()


  const getPokemon = async () => {
    setLoading(true)
    try {
      const data = await getSinglePokemon({ pokemonName: name })
      setPokemon(data.data)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPokemon()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(loading) return <Loader quantity={2}/>
  if(error) return <Error404/>

  return (
    <DetailContainer>
      <ImageContainer>
        <img 
          alt={name}
          src={pokemon?.sprites.other.dream_world.front_default || ''}/>
      </ImageContainer>
      <div>
        <TitlePokemon>{name}</TitlePokemon>
        <Features>
          <p>
            <b>Altura: </b>
            {pokemon?.height}
          </p>
          <p>
            <b>Peso: </b>
            {pokemon?.weight}
          </p>
          <p>
            <b>Experiencia: </b>
            {pokemon?.base_experience}
          </p>
        </Features>
        <ListTypes>
          {pokemon?.types?.map(({ type }) => (
            <ItemType key={name + type.name} className={type.name}>
              {type.name}
            </ItemType>
          ))}
        </ListTypes>
        <BtnFav pokemon={pokemon}/>
      </div>
    </DetailContainer>
  )
}

export default DetailPokemon
