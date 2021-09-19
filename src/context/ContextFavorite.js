import { createContext } from 'react'

import { keyPokemon } from 'constants/data'

import useLocalStorage from 'hooks/useLocalStorage'

export const ContextFavorite = createContext()

const ContainerContextFavorite = ({ children }) => {
  const [favorites, setFavorites, errorFavorite] = useLocalStorage(keyPokemon)

  return (
    <ContextFavorite.Provider value={{favorites, setFavorites, errorFavorite}}>
      {children}
    </ContextFavorite.Provider>
  )
}

export default ContainerContextFavorite