import ListFavorites from 'components/Pokemon/ListFavorites'
import { Container, Title } from 'styles/CommonComponent'

const Favorites = () => {
  return(
    <Container className="page">
      <Title>Mis Favoritos</Title>
      <ListFavorites/>
    </Container>
  )
}

export default Favorites