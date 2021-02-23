import React from 'react'
import './Actions.css'
import { FinishButton } from './FinishButton'
import { NextButton } from './NextButton'
import { PreviousButton } from './PreviousButton'
import classNames from 'classnames'


export const Actions = props => {
    return (
        <div className="actions">
            <div className={
                classNames({"actions-inner": true, "actions-right": props.noPrevious})
                }>            
                { 
                    !props.noPrevious && 
                    <PreviousButton /> 
                }
                { 
                    !props.hasFinish &&
                    <NextButton 
                        isDisabled={!props.isAnswered}
                        isRight={props.noPrevious}
                        /> 
                 }
                {
                    props.hasFinish && 
                    <FinishButton isDisabled={!props.isAnswered}/>
                }
            </div>    
        </div>
    )
}