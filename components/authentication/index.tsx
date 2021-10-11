import React from 'react'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const Authentication: React.FC = () =>
  <div className={style.authentication]}>
    <h1>Welcome to Hubbard</h1>
    <div styles={styles.login}>
      <div styles={styles.login__form}>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button type="submit">Login</button>
        </form>
        </div>
    </div>
  </div>

export default Authentication
