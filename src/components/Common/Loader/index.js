
import { listEmpty } from 'helpers'

import { Container } from 'styles/CommonComponent'
import { ContainerSkeleton, ItemSkeleton } from './styles'

const Loader = ({ quantity = 12 }) => {
  const listProducts = listEmpty(quantity)

  return (
    <Container>
      <ContainerSkeleton>
        {listProducts?.map((item) => (
          <ItemSkeleton key={item}/>
          ))}
      </ContainerSkeleton>
    </Container>
  )
}

export default Loader
