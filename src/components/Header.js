import React from 'react'
import styles from './Header.module.css'
import logo from '../logo.png'
import { useHistory } from 'react-router-dom'

export const Header = props => {
    const history = useHistory()

    const goToHome = () => history.push("/d")
    return (
        <header className={styles.header} onClick={goToHome}>  
            <img className={styles.header__logo} src={logo} alt="logo" />
            <h1>TSC Feedback Form</h1>
        </header>
    )
}