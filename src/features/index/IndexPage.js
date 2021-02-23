import React from 'react'
import { Header } from '../headers/Header'
import './IndexPage.css'
import { MyButton } from '../../components/MyButton'
import { useHistory } from 'react-router-dom'
import logo from '../../logo.png'

export const IndexPage = props => {
    const feedbackTitle = 'Feedback Form'
    const history = useHistory()

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
                    <p>
                        Thank you for taking time to fill in our feedback form.
                    </p>
                    <MyButton title="Begin" handleClick={ goToPage1 } />
                </div>
            </div>
        </>
    )
}