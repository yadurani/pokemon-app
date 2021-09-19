import { BtnFavorite } from "components/Pokemon/ItemPokemon/styles"
import Msg from "constants/messages"
import { ContextFavorite } from "context/ContextFavorite"
import { useContext } from "react"

const BtnFav = ({ pokemon }) => {
  const { favorites, setFavorites } = useContext(ContextFavorite)
	const isExist = favorites && favorites?.some((favorite) => favorite.name === pokemon?.name)
  const isFavorite = isExist ? Msg.YellowHeart : Msg.RedHeart
  const titleBtn = isExist ? Msg.RemoveFav : Msg.AddFav
  const handleFavorite = () => setFavorites(pokemon)
  return (
    <BtnFavorite 
      title={titleBtn}
      onClick={handleFavorite}>
      {isFavorite}
    </BtnFavorite>
  )
}

export default BtnFav
