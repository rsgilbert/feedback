import React from 'react'
import styles from './Option.module.css'
import classNames from 'classnames'

export const Option = props => {

    const answerId = props.answerId

    // const isAnswer = answerId === props.option.id
    const isAnswer = answerId === props.option.option

    const optionSelected = () => {
        // props.handleClick(props.option.id)
        // Use option text [for easy integration with api]
        props.handleClick(props.option.option)
    }

    return (
        <div
            className={styles.option}
            onClick={optionSelected}
            >
            <div className={
                classNames({
                    [styles.dot]: true,
                    [styles.colored]: isAnswer
                })} />
            <div className={styles.data}>
                {props.option.option}
            </div>
        </div>
    )
}