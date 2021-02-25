import React from 'react'
import styles from './MultipleOption.module.css'
import classNames from 'classnames'

export const MultipleOption = props => {

    let answers = props.answers
    // const matchingAnswer = answers.find(ans => ans.answerId === props.option.id)
    const matchingAnswer = answers.find(ans => ans === props.option.id)
    const isAnswer = Boolean(matchingAnswer)

    const optionSelected = () => {
        // props.handleClick(props.option.id)

        // toggle value of answers
        const op = props.option.id
        if(answers.includes(op)) {
            answers = answers.filter(a => a !== props.option.id)
        } else answers = [op, ...answers]
        props.handleClick(answers)
    }

    return (
        <label>
            <input 
                type="checkbox" 
                className="checkbox" 
                checked={isAnswer} 
                onChange={optionSelected}/>
            <span></span>
            {props.option.option}
        </label>
    )
    
    // return (
    //     <div
    //         className={classNames({
    //             [styles.answer]: isAnswer,
    //             [styles.multipleoption]: true
    //         })}
    //         onClick={optionSelected}
    //         >
        
    //         <div className={
    //             classNames({
    //                 [styles.verticalbar]: isAnswer
    //             })}>
    //         </div>
    //         <checkbox  />
            
    //         {props.option.option}
    //     </div>
    // )
}