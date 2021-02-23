import React, { useState } from 'react'
import Swal from 'sweetalert2'
import  './MyButton.css'
import { useHistory } from 'react-router-dom'
import './FinishButton.css'
import { MyButton } from './MyButton'
import classNames from 'classnames'
// import * as firebase from "firebase/app"
// import "firebase/firestore"
import { useSelector, useDispatch } from 'react-redux'
import { selectq6QA, q6answerCleared } from '../features/q6/q6Slice'
import { selectq5QA, q5answerCleared } from '../features/q5/q5Slice'
import { selectq4QA, q4answerCleared } from '../features/q4/q4Slice'
import { selectq3QA, q3answersCleared } from '../features/q3/q3Slice'
import { selectq2QA, q2answerCleared } from '../features/q2/q2Slice'
import { selectq1QA, q1answerCleared } from '../features/q1/q1Slice'
import { selectCommentQA, commentCleared } from '../features/comment/commentSlice'
import { client } from '../api/client'


const APi_SUBMIT_FORM_LOCAL = 'http://localhost:8000/submit-form'
const APi_SUBMIT_FORM = 'http://tscapi.herokuapp.com/submit-form'


export const FinishButton = props => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const q1QA = useSelector(selectq1QA)
    const q2QA = useSelector(selectq2QA)
    const q3QA = useSelector(selectq3QA)
    const q4QA = useSelector(selectq4QA)
    const q5QA = useSelector(selectq5QA)
    const q6QA = useSelector(selectq6QA)
    const commentQA = useSelector(selectCommentQA)

    function clearAnswers() {
        dispatch(q1answerCleared())
        dispatch(q2answerCleared())
        dispatch(q3answersCleared())
        dispatch(q4answerCleared())
        dispatch(q5answerCleared())
        dispatch(q6answerCleared())
        dispatch(commentCleared())
    }

    const sendFeedback = async (feedback) => {
        var feedbackJson = JSON.stringify(feedback)
        const resp = await client.post(APi_SUBMIT_FORM, feedbackJson)
        console.log(resp)
    }



    const handleClick = () => {
        // const db = firebase.firestore()
        const feedback = {
            [q1QA.q]: q1QA.a,
            [q2QA.q]: q2QA.a,
            [q3QA.q]: q3QA.a,
            [q4QA.q]: q4QA.a,
            [q5QA.q]: q5QA.a,
            [q6QA.q]: q6QA.a,
            comment: commentQA.comment
        }

        sendFeedback(feedback)

        //clearAnswers()
        console.log(feedback)
        // Swal.fire({
        //     title: 'Thank You!',
        //     text: 'Your feedback has been recorded',
        //     icon: 'success'
        // })
        // .then(() => {})
        // .then(() => goToHome())
    }

    const goToHome = () => history.push("/")

    return (
        <>
            <button 
            
                disabled={props.isDisabled}
                className="my-button"
                onClick={handleClick}>
                Finish
            </button>
           
        </>
    )
}