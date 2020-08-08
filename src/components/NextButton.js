import React from 'react'
import styles from './NextButton.module.css'


export const NextButton = props => {

    return (
        <button 
            className={styles.nextbutton}
            onClick={props.handleClick}>
            Next
        </button>
    )
}