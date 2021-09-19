import styled from 'styled-components'

export const EmptyContainer = styled.div`
	margin: 3rem 0;
	text-align: center;
	min-height: 55vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
	p {
		font-size: 1.2rem;
	}
  .btn-link {
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