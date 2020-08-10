import React from 'react'
import { kebabCase } from 'lodash'

// TODO: Links are hardcoded for now but should be provided via props later
// /* Import Types */
// import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

const navLinks = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Roadmap',
    url: '/roadmap'
  }
]

/* Render component */
export const NavBar: React.FC = () =>
  <nav className={styles['nav-bar']}>
    <ul className={ styles["nav-links"] }>
      {
        navLinks.map(link => <li><a href={link.url}>{link.label}</a></li>)
      }
    </ul>
  </nav>

export default NavBar
