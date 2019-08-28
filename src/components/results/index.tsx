import React from 'react'

import styles from './results.module.sass'

const Results: React.FC<{results: string}> = props => (
  <div className={styles.results}>
    <p className={styles.result}>{props.results}</p>
  </div>
)

export default Results
