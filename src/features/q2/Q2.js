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

export const Q2 = props => {
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
        <>     
            <div className="container content">
                <Question question={question} />
                <div className="options" >
                    { optionsContent }
                </div>                
            </div>
            <Actions />
        </>
    )
}