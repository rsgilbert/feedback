import React from 'react'
import { useSelector } from 'react-redux'
import { Actions } from '../../components/Actions'
import { Question } from '../../components/Question'
import { CommentArea } from './CommentArea'
import './CommentPage.css'
import { selectQuestion } from './commentSlice'


export const CommentPage = props => {
    const question = useSelector(selectQuestion)
       
    return (
        <div>
            <div className="container">
                <Question question={ question } />
                <CommentArea />
            </div>
            <Actions noNext={true} hasFinish={true} isAnswered={true}/>
        </div>
    )
}