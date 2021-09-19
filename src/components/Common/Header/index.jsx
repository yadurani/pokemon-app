import { useContext } from 'react'
import { Link } from '@reach/router'
import { MdExitToApp } from 'react-icons/md'

import { ContextAuth } from 'context/ContextAuth'
import { BtnExit, HeaderContainer, Logo, Nav } from './styles'
import { Container } from 'styles/CommonComponent'

const Header = () => {
  const { isAuth, removeAuth } = useContext(ContextAuth)
  return (
    <HeaderContainer>
      <Container>
        <Logo>
          <img src="/pokemon.png" alt="PokeBola" height="30"/>
          <p>Pokedex</p>
        </Logo>
        {isAuth && 
          <Nav>
            <Link to="/home">Home</Link>
            <Link to="/favorites">Favoritos</Link>
            <BtnExit onClick={removeAuth} ariaLabel="Cerrar sesión">
              <MdExitToApp size="1.5rem" color="white"/>
            </BtnExit>
          </Nav>
        }
      </Container>
    </HeaderContainer>
  )
}

export default Header
