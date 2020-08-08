import React from 'react'
import styles from './Option.module.css'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

export const Option = props => {

    const answerId = props.answerId

    const isAnswer = answerId === props.option.id

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