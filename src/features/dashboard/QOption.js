import React from 'react'
import './QOption.css'
import classNames from 'classnames'



export const QOption = ({ question, handleOptionSelected }) => {

    const questionId = question.id
    const isColored = question.isSelected
    

    const optionSelected = () => {
        handleOptionSelected(questionId)
    }

    return (
        <div
            className="qoption"
            onClick={optionSelected}
            >
            <div className="dot-container">
                <div className={
                    classNames({
                        "dot": true,
                        "colored": isColored
                    })
                    }/>
            </div>
           
            <div className="data">
                {question.question}
            </div>
        </div>
    )
}