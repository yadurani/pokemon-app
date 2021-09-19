import { createContext } from 'react'

import useSessionLogin from 'hooks/useSessionLogin'

export const ContextAuth = createContext()

const ContainerContextAuth = ({ children }) => {
  const auth = useSessionLogin()

  return (
    <ContextAuth.Provider value={{...auth}}>
      {children}
    </ContextAuth.Provider>
  )
}

export default ContainerContextAuth