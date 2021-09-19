import ListPokemons from 'components/Pokemon/ListPokemons'
import Search from 'components/Pokemon/Search'

import { Container, ContainerFluid } from 'styles/CommonComponent'

const Home = () => {  
  return (
    <ContainerFluid className="page">
      <Search/>
      <Container>
        <ListPokemons/>
      </Container>
    </ContainerFluid>
  )
}

export default Home