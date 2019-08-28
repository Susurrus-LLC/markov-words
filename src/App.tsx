import React from 'react'
import 'normalize.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Header from './components/page-header'
import Form from './components/form'
import Footer from './components/page-footer'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  )
}

export default App
