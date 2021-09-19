import styled from 'styled-components'
import { Container } from 'styles/CommonComponent'

export const HeaderContainer = styled.header`
  align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.8);
  background: #1a1b1c;
  color: white;
  display: flex;
  height: 60px;
  position: sticky;
  top:0;
  width: 100%;
  z-index: 5;
  ${Container} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
` 

export const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 0.5rem;
  }
  p {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    @media(max-width: 320px) {
      display: none;
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a, button {
    margin-left: 1rem;
  }
`

export const BtnExit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`