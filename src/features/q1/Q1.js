import React from 'react'
import { Header } from '../headers/Header'
import { useSelector, useDispatch } from 'react-redux'
import { selectQuestion, selectAllOptions, selectAnswerId, answerIdUpdated } from './q1Slice'
import './Q1.css'
import { Question } from '../../components/Question'
import { Search } from '../../components/Search'
import { Option } from '../../components/Option'
import { selectSearch, searchCleared } from '../search/searchSlice'
import { Actions } from  '../../components/Actions'



export const Q1 = props => {
    const question = useSelector(selectQuestion)
    const allOptions = useSelector(selectAllOptions)
    const search = useSelector(selectSearch)
    const answerId = useSelector(selectAnswerId)
    const dispatch = useDispatch()
    // const questions = useSelector(selectAllQuestions)
    // const formStatus = useSelector(state => state.form.status )
  
    const setAnswerId = answerId => dispatch(answerIdUpdated({ answerId }))
    console.log(answerId)
    let options = []
    if(search !== "") {
        options = allOptions.filter(o => o.option.toLowerCase().includes(search.toLowerCase()))
    }
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
                <Search />

                <div className="options" >
                    { optionsContent }
                </div>
            </div>
            <Actions 
                isAnswered={answerId !== null}
                noPrevious={true}/>
        </div>
    )
}