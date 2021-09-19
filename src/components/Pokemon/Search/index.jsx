import { useContext, useState } from 'react'
import { MdSearch } from 'react-icons/md'

import Input from 'components/Common/Input'
import { ContextPoke } from 'context/ContextPoke'

import { Container } from 'styles/CommonComponent'
import { BtnSearch, FormSearch, SearchContainer, TitleSearch } from './styles'

const Search = () => {
  const { onSearch } = useContext(ContextPoke)
  const [search, setSearch] = useState('')
  const isDisabled = search.length < 3

  const onChange = (e) => {
    const { value } = e.target
    setSearch(value)
    if (value.length === 0) {
			onSearch(null);
		}
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onSearch(search)
  }

  return (
    <SearchContainer>
      <Container>
        <TitleSearch>Busca tu Pokémon</TitleSearch>
        <FormSearch onSubmit={onSubmit}>
          <Input 
            name="search"
            type="text"
            value={search}
            onChange={onChange}
            placeholder="Escribe el nombre del Pokémon"/>
          <BtnSearch type="submit" disabled={isDisabled} ariaLabel="Buscar">
            <MdSearch size="1.5rem" color="black"/>
          </BtnSearch>
        </FormSearch>
      </Container>
    </SearchContainer>
  )
}

export default Search
