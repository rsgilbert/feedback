import React from 'react'
import './Actions.css'
import { FinishButton } from './FinishButton'
import { NextButton } from './NextButton'
import { PreviousButton } from './PreviousButton'

export const Actions = props => {
    return (
        <div className="actions">
            <div className="actions-inner">            
                { !props.noPrevious && <PreviousButton /> }
                { !props.noNext && <NextButton /> }
                { props.hasFinish && <FinishButton />}
            </div>    
        </div>
    )
}