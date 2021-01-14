import React from 'react'
import './LeftSidebar.css'
import { QOption } from './QOption'

import { useDispatch, useSelector } from 'react-redux'
import { selectQuestions } from './dashboardSlice'
import { questionOptionSelected } from './dashboardSlice'
import { SelectTitle } from './SelectTitle'


export const LeftSidebar = () => {
    const dispatch = useDispatch()

    const questions = useSelector(selectQuestions)

    const renderQuestions = questions.map(question => {
        const questionId = question.id
        const handleOptionSelected = () => {
            dispatch(questionOptionSelected({ questionId }))
        }

        return (
            <QOption 
                question={question}
                handleOptionSelected={handleOptionSelected}
                key={question.id}
                />
        )
    })

    return (
        <div className="left-sidebar">
            <SelectTitle title="Start Date" />
            <div className="question">
                <SelectTitle title="Select Question" />
                {renderQuestions}
            </div>
        </div>
    )
}