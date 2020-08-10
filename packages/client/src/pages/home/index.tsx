import React from 'react'

/* Import components */

import { MiniMe } from '@hubbard/components'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const Home: React.FC<Props> = ({ name, colour }: Props) =>
  <div className={styles[colour]}>
    This is an example component, the name provided to it was {name}
    <MiniMe />
  </div>

export default Home
