import React from 'react'
import Header from '../Header'
import PropTypes from 'prop-types'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
