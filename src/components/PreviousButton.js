import React from 'react'
import styles from './PreviousButton.module.css'
import { useHistory } from 'react-router-dom'
import { getQuestionNumber } from '../utils'
import { useDispatch } from 'react-redux'
import { searchCleared } from '../features/search/searchSlice'



export const PreviousButton = props => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(searchCleared())
        const previousQuestionNumber = getQuestionNumber() - 1
        history.push(`/${previousQuestionNumber}`)
    }

    return (
        <button 
            className={styles.previousbutton}
            onClick={handleClick}>
            Back
        </button>
    )
}