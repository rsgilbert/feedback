import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectQuestion, selectAllOptions, selectAnswerId, answerIdUpdated } from './q2Slice'
import { Question } from '../../components/Question'
import { Search } from '../../components/Search'
import { Option } from '../../components/Option'
import { NextButton } from '../../components/NextButton'
import { selectSearch, searchCleared } from '../search/searchSlice'
import { useHistory } from 'react-router-dom'
import { Actions } from  '../../components/Actions'

import { selectQuestionById, questionAnswered } from '../form/formSlice'

export const Q2 = props => {
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()
 
    const question = useSelector(state => selectQuestionById(state, 2))
    const allOptions = question.options
    const answerId = question.answerId 
    const setAnswerId = answerId => dispatch(questionAnswered({ questionId: 2, optionId: answerId }))

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
        <>     
            <div className="container content">
                <Question question={question.question} />
                <div className="options" >
                    { optionsContent }
                </div>                
            </div>
            <Actions isAnswered={!!answerId}/>
        </>
    )
}