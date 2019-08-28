import React from 'react'
import 'normalize.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Header from './components/page-header'
import Page from './components/page'
import Footer from './components/page-footer'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  )
}

export default App
