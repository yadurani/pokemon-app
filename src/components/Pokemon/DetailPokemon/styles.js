import styled from 'styled-components'
import { ListTypes } from '../ItemPokemon/styles'

export const TitlePokemon = styled.h2`
  margin-bottom:0;
  font-size: 1.5rem;
`

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;
  margin: 3rem 0;
  align-items: center;
  min-height: 69vh;
  @media (max-width: 767px ) {
    grid-template-columns: 1fr;
  }
  ${ListTypes} {
    justify-content: flex-start;
  }
`

export const ImageContainer = styled.div`
  text-align: center;
`
export const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 1rem;
  gap: 1rem;
  p {
    margin: 0;
  }
`