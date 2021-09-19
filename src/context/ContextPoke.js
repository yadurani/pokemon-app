import useInitialValues from 'hooks/useInitialValues'
import { createContext } from 'react'

export const ContextPoke = createContext()

const ContainerContextPoke = ({ children }) => {
  const initialState = useInitialValues()
  return (
    <ContextPoke.Provider value={initialState}>
      {children}
    </ContextPoke.Provider>
  )
}

export default ContainerContextPoke