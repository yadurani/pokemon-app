import { useState } from 'react'

const useSessionLogin = () => {
  const keyToken = 'token'
  const [isAuth, setIsAuth] = useState(() => {
    return !!window.localStorage.getItem(keyToken)
  })

  const activeAuth = (token) => {
    setIsAuth(true)
    window.localStorage.setItem(keyToken, token)
  }

  const removeAuth = () => {
    setIsAuth(false)
    window.localStorage.removeItem(keyToken)
  }

  return {
    isAuth,
    activeAuth,
    removeAuth
  }
}

export default useSessionLogin