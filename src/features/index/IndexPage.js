import React from 'react'
import { Header } from '../../components/Header'
import './IndexPage.css'
import { MyButton } from '../../components/MyButton'
import { useHistory } from 'react-router-dom'

export const IndexPage = props => {
    const history = useHistory()

    const goToPage1 = () => {
        history.push("/1")
    }
    

    return (
        <>
            <div className="background"></div>
            <Header />
            <div className="container">
                <div className="index">
                    <p className="index--title">
                        Welcome!
                    </p>
                    <p className="index--subtitle">
                        Thank you for taking time to fill in our feedback form.
                    </p>
                    <MyButton title="Begin" handleClick={ goToPage1 } />

                </div>
            </div>
        </>
    )
}