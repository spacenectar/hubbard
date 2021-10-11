import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'


/* Render component */
export const Authentication: React.FC<Props> = ({ name, colour }: Props) =>
  <div className={styles[colour]}>
    This will be the authentication component
  </div>

export default Authentication
