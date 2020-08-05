import React from 'react'
import styles from './Header.module.css'
import logo from '../logo.png'

export const Header = props => {
    return (
        <header className={styles.header}>  
            <img className={styles.header__logo} src={logo} alt="logo" />
            <h1>TSC Feedback Form</h1>
        </header>
    )
}