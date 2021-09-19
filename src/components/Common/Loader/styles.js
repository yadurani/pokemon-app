import styled, { keyframes } from 'styled-components'

export const ContainerSkeleton = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  list-style: none;
  margin: 3rem 0;
  padding: 0;
`

export const animationSkeleton = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -135% 0%;
  }
`

export const ItemSkeleton = styled.li`
  -moz-column-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  animation: ${animationSkeleton} 1.2s ease-in-out infinite;
  background-image: linear-gradient(to right, #9b9b9b 0%, #F8F8F8 50%, #969595 100%);
  background-position: 0% 0%;
  background-size: 400% 400%;
  display: inline-block;
  height: 280px;
  margin: 5px 0;
  opacity: 0.3;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
`
