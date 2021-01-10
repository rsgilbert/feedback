import React from 'react'
import './PreviousButton.css'
import { useHistory } from 'react-router-dom'
import { getQuestionNumber } from '../utils'
import { useDispatch } from 'react-redux'
import { searchCleared } from '../features/search/searchSlice'
import './MyButton.css'


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
            className="my-button"
            onClick={handleClick}>
            Back
        </button>
    )
}