import React from 'react'
import './LeftSidebar.css'
import { QOption } from './QOption'

export const LeftSidebar = ({ questions }) => {

    const renderQuestions = questions.map(question => {
        return (
            <QOption question={question} key={question.id}/>
        )
    })

    return (
        <div className="left-sidebar">
            <div className="start-time">
                start time
            </div>
            <div className="question">
                <p className="select-question">Select Question</p>
                {renderQuestions}
            </div>
        </div>
    )
}