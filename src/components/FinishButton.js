import React from 'react'
import styles from './NextButton.module.css'
import { useHistory } from 'react-router-dom'
import './FinishButton.css'
import { MyButton } from './MyButton'
import classNames from 'classnames'

export const FinishButton = props => {
    const history = useHistory()

    const handleClick = () => {
        
    }

    const goToHome = () => history.push("/")

    return (
        <>
            <button 
                className={styles.nextbutton}
                onClick={handleClick}>
                Finish
            </button>
            <div className="finishbackground">
                <div className={classNames({
                    finishmessage: true,
                    notdisplayed: props.isFinished
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