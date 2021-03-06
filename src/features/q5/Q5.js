import React from 'react'
import { Header } from '../headers/Header'
import { useSelector, useDispatch } from 'react-redux'
import { selectQuestion, selectAllOptions, selectAnswerId, answerIdUpdated } from './q5Slice'
import { Question } from '../../components/Question'
import { Option } from '../../components/Option'
import { NextButton } from '../../components/NextButton'
import { selectSearch } from '../search/searchSlice'
import { PreviousButton } from '../../components/PreviousButton'
import { Actions } from '../../components/Actions'

import { selectQuestionById, questionAnswered } from '../form/formSlice'


export const Q5 = props => {
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()

    const question = useSelector(state => selectQuestionById(state, 5))
    const allOptions = question.options
    const answerId = question.answerId 
    const setAnswerId = answerId => dispatch(questionAnswered({ questionId: 5, optionId: answerId }))

 
    const options = allOptions.filter(o => o.option.toLowerCase().includes(search.toLowerCase()))
    const optionsContent = options.map(option => 
        <Option 
            key={option.id} 
            option={option} 
            answerId={answerId}
            handleClick={ setAnswerId }
            />
    )
    
    return (
        <div>
            <div className="container">
                <Question question={question.question} />
                { optionsContent }
            </div>
            <Actions isAnswered={!!answerId}/>
        </div>
    )
}