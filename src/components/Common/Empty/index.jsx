import { Link } from '@reach/router'
import { Container } from 'styles/CommonComponent'
import { EmptyContainer } from './styles'

const Empty = () => {
	return (
		<Container>
			<EmptyContainer>
				<p>π­π­π­π­π­π­</p>
				<p>
					AΓΊn no tienes Pokemones favoritos
				</p>
        <Link to="/home" className="btn-link">Agregar</Link>
			</EmptyContainer>
		</Container>
	)
}

export default Empty
