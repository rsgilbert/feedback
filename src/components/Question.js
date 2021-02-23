import React from 'react'
import styles from './Question.module.css'

export const Question = ({ question }) => {


    return (
        <h1 className={ styles.question }>
            { question }
        </h1>
    )
}