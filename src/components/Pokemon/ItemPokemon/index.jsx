import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { ContentButton, ImagePokemon, ItemPokemonContent, ItemType, ListTypes, TitlePokemon } from './styles'
import BtnFav from 'components/Common/BtnFavorite'

const ItemPokemon = (props) => {
  const { name, sprites, types } = props
  const urlDetail = `/pokemon/${name}`

  return (
    <ItemPokemonContent className={types[0].type.name}>
      <ImagePokemon 
        alt={name} 
        src={sprites.other.dream_world.front_default || ''}/>
      <TitlePokemon>{name}</TitlePokemon>
      <ListTypes>
        {types?.map(({ type }) => (
          <ItemType key={name + type.name} className={type.name}>
            {type.name}
          </ItemType>
        ))}
      </ListTypes>
      <ContentButton>
        <Link to={urlDetail} className="btn-link">Más detalles</Link>
        <BtnFav pokemon={props}/>
      </ContentButton>
    </ItemPokemonContent>
  )
}


ItemPokemon.propTypes = {
  props: PropTypes.object,
}

export default ItemPokemon
