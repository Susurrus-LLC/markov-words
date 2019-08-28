import React from 'react'

import styles from './pageFooter.module.sass'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Built by Ian A. Cook, copyright 2019 under the AGPL-3.0 license. See the project on <a href='https://github.com/nai888/markov-words' target='_blank' rel='noopener noreferrer'>GitHub</a>.</p>
    </footer>
  )
}

export default Footer
