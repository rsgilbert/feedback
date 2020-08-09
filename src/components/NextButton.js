import React from 'react'
import styles from './NextButton.module.css'
import { useHistory } from 'react-router-dom'
import { getQuestionNumber } from '../utils'
import { useDispatch } from 'react-redux'
import { searchCleared } from '../features/search/searchSlice'


export const NextButton = props => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(searchCleared())
        const nextQuestionNumber = getQuestionNumber() + 1
        history.push(`/${nextQuestionNumber}`)
        
    }

    return (
        <button 
            className={styles.nextbutton}
            onClick={handleClick}>
            Next
        </button>
    )
}