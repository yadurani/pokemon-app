import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
export const TitleWelcome = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin: 2rem 0;
`

export const BtnSubmit = styled.button`
  background: #242325;
  border-radius: 0.3rem;
  color: white;
  font-size: 1rem;
  padding: 0.6rem 1rem;
  text-decoration: none;
  width: 100%;
  margin: 0rem 0 2rem;
  @media(hover: hover) {
    &:hover{
      background-color: #302f31;
    }
  }
`

export const ContainerForm = styled.form`
  max-width: 350px;
  width: 350px;
  @media(max-width: 560px) {
    max-width: 100%;
    width: 100%;
  }
`