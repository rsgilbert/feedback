import React from 'react'
import { Header } from '../headers/Header'
import { Question } from '../../components/Question'
import { useSelector, useDispatch } from 'react-redux'
import { selectQuestion, selectAnswers, answersUpdated } from '../q3/q3Slice'
import { selectAllOptions } from '../q3/q3Slice'
import { MultipleOption } from '../../components/MultipleOption'
import { useHistory } from 'react-router-dom'
import { PreviousButton } from '../../components/PreviousButton'
import { NextButton } from '../../components/NextButton'
import { OtherModal } from '../../components/OtherModal'
import { modalOpened } from '../other/otherSlice'
import { Actions } from '../../components/Actions'
import { selectQuestionById, questionMultipleAnswered } from '../form/formSlice'


export const Q3 = props => {
    const history = useHistory()
    const dispatch = useDispatch()
    const question = useSelector(state => selectQuestionById(state, 3))
    // const answerId = question.answerId 
    const answers = question.answers || []
    const setMultipleAnswers = answers => dispatch(questionMultipleAnswered({ questionId: 3, answers }))


    const allOptions = question.options
    const options = allOptions

    const goToPage2 = () => {
        history.push("/2")
    }
    const goToPage4 = () => {
        history.push("/4")
    }

  

    const handleOptionClick = (answers) => {
        // if(answerId === "5") {
        //     dispatch(modalOpened())
        // }
        dispatch(setMultipleAnswers(answers))
        // else dispatch(answersUpdated({ answerId, reason }))
    }
    
    const optionsContent = options.map(option => 
        <MultipleOption
            key={option.id} 
            option={option} 
            answers={answers}
            handleClick={ handleOptionClick }
            />
    )
    

    return (
        <div>
            <div className="container">
                <Question question={question.question} />
                { optionsContent }
            </div>
            <OtherModal />
            <Actions isAnswered={answers.length > 0}/>
        </div>
    )
}