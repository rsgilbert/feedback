import React, { useState } from 'react'
import  './NextButton.css'
import { useHistory } from 'react-router-dom'
import './FinishButton.css'
import { MyButton } from './MyButton'
import classNames from 'classnames'

export const FinishButton = props => {
    const history = useHistory()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleClick = () => {
        setIsModalOpen(true)
    }

    const goToHome = () => history.push("/")

    return (
        <>
            <button 
                className="nextbutton"
                onClick={handleClick}>
                Finish
            </button>
            <div className={classNames({
                finishbackground: true,
                hidemodal: !isModalOpen
            })}>
                <div className={classNames({
                    finishmessage: true
                })}
                    >
                    <h1>Thank you!</h1>
                    <p>Your feedback has been recorded</p>
                    <MyButton title="OK" handleClick={goToHome}/>
                </div>
            </div>
        </>
    )
}