import React from 'react'
import { Header } from '../../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { selectQuestion, selectAllOptions, selectAnswerId, answerIdUpdated } from './q5Slice'
import { Question } from '../../components/Question'
import { Option } from '../../components/Option'
import { NextButton } from '../../components/NextButton'
import { selectSearch } from '../search/searchSlice'
import { PreviousButton } from '../../components/PreviousButton'
import { Actions } from '../../components/Actions'


export const Q5 = props => {
    const question = useSelector(selectQuestion)
    const allOptions = useSelector(selectAllOptions)
    const search = useSelector(selectSearch)
    const answerId = useSelector(selectAnswerId)
    const dispatch = useDispatch()
 
    const setAnswerId = answerId => dispatch(answerIdUpdated({ answerId }))
    
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
                <Question question={question} />
                { optionsContent }
            </div>
            <Actions />
        </div>
    )
}