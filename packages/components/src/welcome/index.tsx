import React from 'react'
import { capitalize } from 'lodash'
import cx from 'classnames'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import salutation from './helpers/salutation'

/* Import Components */
import MiniMe from '../mini-me'
import Status from '../status'

/* Render component */
export const Welcome: React.FC<Props> = ({ status, nextDate, miniMeName, miniMeWidth, hour }: Props) => { 
 const { segment, lightLevel } = salutation(hour || undefined)
 return <div className={cx(styles['block'], styles[lightLevel], styles[`status-${status}`])}>
   <div className={styles.foreground}>
    <MiniMe name={miniMeName} width={miniMeWidth || 'regular'} classes={"mini-me"}/>
      <div className={styles["salutation"]}>
        <h1>{capitalize(segment)}</h1>
        <h2>I'm Alex, I like to make things</h2>
      </div>
      <div className={styles['status-container']}>
        <Status status={status} date={nextDate} />
      </div>
   </div>
  </div>
}

export default Welcome
