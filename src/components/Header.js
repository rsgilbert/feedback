import React from 'react'
import './Header.css'
import logo from '../logo.png'
export const Header = props => {


    return (
        <header class="header">  
            <img class="header--logo" src={logo} alt="logo" />
            <h1>TSC Feedback Form</h1>
          
        </header>
    )
}