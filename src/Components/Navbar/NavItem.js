import React from 'react'
import styles from './navItem.module.css'

const NavItem = (props) => {
  return (
    <div className={styles['navbar-item']}>
        {props.text}
    </div>
  )
}

export default NavItem