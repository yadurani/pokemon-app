import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  position: relative;
  z-index: 1;
  background: #1a1b1c;
  color: white;
  margin-top: 2rem;
  @media(max-width: 767px) {
    padding: 50px 0 0;
  }
`

export const ContainerCopy = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 1rem 0;
  @media(max-width: 767px) {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    grid-gap: 1rem;
  }
`

export const SocialList = styled.ul`
  align-items: center;
  display: flex;
  gap: 0 1rem;
  grid-gap: 0 1rem;
  justify-content: flex-end;
  list-style: none;
  li {
    transition: transform 0.3s ease;
    @media(hover: hover) {
      &:hover {
        transform: scale(1.2);
        transition: transform 0.3s ease;
      }
    }
  }
`

export const LinkExternal = styled.a``

export const TextInfo = styled.div`
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a,  span, u, b  {
    font-size: inherit;
  }
  span {
    margin-bottom: 0.5rem;
    &:last-child {
    }
  }
`