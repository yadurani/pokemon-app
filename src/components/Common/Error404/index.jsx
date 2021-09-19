import { Link } from '@reach/router'
import { Container } from 'styles/CommonComponent'
import { Error404Container } from './styles'

const Error404 = () => {
	return (
		<Container>
			<Error404Container>
				<p>😭😭😭😭😭😭</p>
				<p>
					Upsss!! Esta página no existe!
				</p>
        <Link to="/home" className="btn-link">Volver</Link>
			</Error404Container>
		</Container>
	)
}

export default Error404
