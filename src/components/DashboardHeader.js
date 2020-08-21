import React from 'react'
import { Header } from './Header.js'
import './DashboardHeader.css'



export const DashboardHeader = props => {


    return (
        <>
        
            <h1 className="dashboard-h1">Feedback Dashboard</h1>
            <ul className="dashboard-ul">
                    <li>
                        <a href="#q1">Q1</a>
                    </li>
                    <li>
                        <a href="#q2">Q2</a>
                    </li>
                    <li>
                        <a href="#q3">Q3</a>
                    </li>
                    <li>
                        <a href="#q4">Q4</a>
                    </li>
                    <li>
                        <a href="#q5">Q5</a>
                    </li>
                    <li>
                        <a href="#q6">Q6</a>
                    </li>

                </ul>
        </>
    )
}