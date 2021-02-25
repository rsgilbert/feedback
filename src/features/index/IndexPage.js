import React, { useEffect } from 'react'
import './IndexPage.css'
import { MyButton } from '../../components/MyButton'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../logo.png'
import { fetchForm, selectAllQuestions } from '../form/formSlice'



export const IndexPage = props => {
    const feedbackTitle = 'Feedback Form'

    const history = useHistory()
    const dispatch = useDispatch()
    const questions = useSelector(selectAllQuestions)
    const formStatus = useSelector(state => state.form.status )
    const error = useSelector(state => state.form.error)


    useEffect(() => {
        if(formStatus === 'idle') {
            dispatch(fetchForm())
        }
    }, [formStatus, dispatch])

    let content 
    if(formStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if(formStatus === 'succeeded') {
        // const orderedPosts = form.slice().sort((a, b) => b.dateIso.localeCompare(a.dateIso))
        content = questions.map(question => (
            <div key={question.id}> {question.question} </div>
        ))
    } else if(formStatus === 'error' || formStatus ===  'failed') {
        content = <div>An error occured while fetching form: { error }</div>
    }


    const goToPage1 = () => {
        history.push("/1")
    }
    

    return (
        <>
            <div className="container">
                <div className="index">
                    <img className="index-logo" src={logo} alt="logo" />
           
                    <h1>
                        { feedbackTitle }
                    </h1>
                    <p>Content</p>
                    { content }
                    <p>
                        Thank you for taking time to fill in our feedback form.
                    </p>
                    <MyButton title="Begin" handleClick={ goToPage1 } />
                </div>
            </div>
        </>
    )
}