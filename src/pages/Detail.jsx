import { useParams } from '@reach/router'

import DetailPokemon from 'components/Pokemon/DetailPokemon'

import { Container } from 'styles/CommonComponent'

const Detail = () => {
  const slug = useParams()

  return (
    <Container className="page">
      <DetailPokemon name={slug?.name ?? ''}/>
    </Container>
  )
}

export default Detail