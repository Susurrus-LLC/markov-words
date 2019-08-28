import React from 'react'

import styles from './pageHeader.module.sass'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Markov Word Generator</h1>
    </header>
  )
}

export default Header
