import styled from 'styled-components'

export const ItemPokemonContent = styled.li`
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  text-align: center;
  padding: 1rem 0;
  height: fit-content;
`

export const ImagePokemon = styled.img`
  height: 100px;
  object-fit: contain;
`

export const TitlePokemon = styled.h3`
  font-size: 1.4rem;
  text-transform: capitalize;
  font-weight: bold;
  margin: 1rem 0;
`

export const ListTypes = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 0.5rem;
  gap: 0.5rem;
  margin: 1rem 0;
`

export const ItemType = styled.li`
  padding: 0.3rem 1rem;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 0.3rem;
  text-transform: capitalize;
`

export const ContentButton = styled.div`
  display: flex;
  margin: 0 1rem;
  .btn-link {
    width: 100%;
    margin-right: 0.5rem;
    background: #242325;
    padding: 0.6rem 1rem;
    color: white;
    border-radius: 0.3rem;
    text-decoration: none;
    font-size: 1rem;
    @media(hover: hover) {
      &:hover{
        background-color: #302f31;
      }
    }
  }
`

export const BtnFavorite = styled.button`
  background: #1d1c1d;
  padding: 0.6rem;
  color: white;
  border-radius: 0.3rem;
  text-decoration: none;
  font-size: 1rem;
  @media(hover: hover) {
    &:hover{
      background-color: #302f31;
    }
  }
`