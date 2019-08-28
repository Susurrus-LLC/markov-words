import React from 'react'
import 'normalize.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Page from './components/page'

const App: React.FC = () => {
  return (
    <>
      <header className='header' />
      <Page />
      <footer className='footer' />
    </>
  )
}

export default App
