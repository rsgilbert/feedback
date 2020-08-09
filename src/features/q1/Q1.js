import React from 'react'
import { Header } from '../../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { selectQuestion, selectAllOptions, selectAnswerId, answerIdUpdated } from './q1Slice'
import './Q1.css'
import { Question } from '../../components/Question'
import { Search } from '../../components/Search'
import { Option } from '../../components/Option'
import { NextButton } from '../../components/NextButton'
import { selectSearch, searchCleared } from '../search/searchSlice'



export const Q1 = props => {
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
            <Header />
            <div className="container">
                <Question question={question} />
                <Search />
                { optionsContent }
            </div>
            <NextButton />
        </div>
    )
}