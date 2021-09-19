import { useContext } from 'react'
import { Redirect } from '@reach/router'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Favorites from 'pages/Favorites'
import Detail from 'pages/Detail'

import { ContextAuth } from 'context/ContextAuth'

import FadeTransitionRouter from './FadeTransitionsRouter'
import Error404 from 'components/Common/Error404'

const Routes = () => {
  const { isAuth } = useContext(ContextAuth)
  return (
    <FadeTransitionRouter>
      {!isAuth && <Redirect noThrow from='/home' to='/' />}
      {!isAuth && <Redirect noThrow from='/favorites' to='/' />}
      {isAuth && <Redirect noThrow from='/' to='/home' />}
      <Error404 default/>
      <Login path="/"/>
      <Home path='/home' />
      <Favorites path="/favorites"/>
      <Detail path="/pokemon/:name"/>
    </FadeTransitionRouter>
  )
}

export default Routes