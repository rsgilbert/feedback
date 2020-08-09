import React from 'react'
import styles from './Option.module.css'
import classNames from 'classnames'

export const MultipleOption = props => {

    const answers = props.answers
    const matchingAnswer = answers.find(ans => ans.answerId === props.option.id)
    const isAnswer = Boolean(matchingAnswer)

    const optionSelected = () => {
        props.handleClick(props.option.id)
    }
    
    return (
        <div
            className={classNames({
                [styles.answer]: isAnswer,
                [styles.option]: true
            })}
            onClick={optionSelected}>
            <div className={
                classNames({
                    [styles.verticalbar]: isAnswer
                })}></div>
            {props.option.option}
        </div>
    )
}