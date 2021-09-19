import ContainerContextPoke from 'context/ContextPoke'
import ContainerContextFavorite from 'context/ContextFavorite'
import ContainerContextAuth from 'context/ContextAuth'

import Route from 'routes/Routes'

import Layout from 'components/Common/Layout'

import GlobalStyle from 'styles/GlobalStyles'

function App() {
  return (
    <ContainerContextAuth>
      <ContainerContextPoke>
        <ContainerContextFavorite>
          <Layout>
            <GlobalStyle/>
            <Route/>
          </Layout>
        </ContainerContextFavorite>
      </ContainerContextPoke>
    </ContainerContextAuth>
  )
}

export default App
