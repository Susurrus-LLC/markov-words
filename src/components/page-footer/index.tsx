import React from 'react'

import styles from './pageFooter.module.sass'

const Footer: React.FC = () => {
  const years = (): string => {
    const start = 2019
    const current = new Date().getFullYear()
    return current > start ? `${start}–${current}` : start.toString()
  }

  const version = '1.0.0'

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Version{' '}
        <a
          href='https://github.com/Susurrus-LLC/markov-words/blob/master/CHANGELOG.md'
          target='_blank'
          rel='noopener noreferrer'
        >
          {version}
        </a>
        . Built by{' '}
        <a
          href='https://github.com/nai888'
          target='_blank'
          rel='noopener noreferrer'
        >
          Ian A.&nbsp;Cook
        </a>
        , copyright © {years()} under the{' '}
        <a
          href='https://github.com/Susurrus-LLC/markov-words/blob/master/LICENSE'
          target='_blank'
          rel='noopener noreferrer'
        >
          AGPL-3.0 license
        </a>
        . See the project on{' '}
        <a
          href='https://github.com/Susurrus-LLC/markov-words'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
