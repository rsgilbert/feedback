import React from 'react'
import styles from './PreviousButton.module.css'


export const PreviousButton = props => {

    return (
        <button 
            className={styles.previousbutton}
            onClick={props.handleClick}>
            Back
        </button>
    )
}