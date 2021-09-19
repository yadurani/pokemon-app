import styled from 'styled-components'

export const ListPokemonsContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  margin: 3rem 0;
  min-height: ${({ minHeight }) => minHeight || 'auto'};
`