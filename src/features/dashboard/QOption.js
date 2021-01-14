import React from 'react'
import './QOption.css'
import classNames from 'classnames'



export const QOption = ({ question }) => {

    const questionId = question.id
    

    const optionSelected = () => {
        
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
                        "colored": true
                    })
                    }/>
            </div>
           
            {/* <div className={
                classNames({
                    ["dot"]: true
                })} /> */}
            <div className="data">
                {question.question}
            </div>
        </div>
    )
}