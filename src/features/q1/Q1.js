import React from 'react'
import { Header } from '../../components/Header'
import { useSelector } from 'react-redux'
import { selectQuestion, selectAllOptions } from './q1Slice'
import './Q1.css'
import { Question } from '../../components/Question'
import { Search } from '../../components/Search'



export const Q1 = props => {
    const question = useSelector(selectQuestion)
    const options = useSelector(selectAllOptions)
    

    
    return (
        <div>
            <Header />
            <div class="container">
                <Question question={question} />
                <Search />
            </div>
        </div>
    )
}