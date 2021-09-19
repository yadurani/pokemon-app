import { useContext } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import { ContextPoke } from 'context/ContextPoke'

import { BtnArrow, PaginationContainer, Paragraph } from './styles'

const Pagination = () => {
  const { page, total, prevPage, nextPage } = useContext(ContextPoke)
  const prevDisabled = page === 0
  const nextDisabled = page + 1 === total
  
  return (
    <PaginationContainer>
      <BtnArrow onClick={prevPage} disabled={prevDisabled}>
        <MdKeyboardArrowLeft size="2rem"/>
      </BtnArrow>
      <Paragraph>{page + 1} de <b>{total}</b></Paragraph>
      <BtnArrow onClick={nextPage} disabled={nextDisabled}>
        <MdKeyboardArrowRight size="2rem"/>
      </BtnArrow>
    </PaginationContainer>
  )
}

export default Pagination
