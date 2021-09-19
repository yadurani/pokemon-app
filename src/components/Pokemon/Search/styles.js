import styled  from 'styled-components'

export const SearchContainer = styled.section`
  background: #1a1b1c;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormSearch = styled.form`
  width: 500px;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  @media (max-width: 560px) {
    width: 100%;
  }
`

export const TitleSearch = styled.p`
  font-size: 2rem;
  color: white;
  text-align: center;
  margin: 0;
`

export const BtnSearch = styled.button`
  background: yellow;
  margin-left: 1rem;
  border-radius: 0.3rem;
  padding: 0 0.5rem;
  height: 37px;
  &:disabled {
    opacity: 0.3;
  }
`