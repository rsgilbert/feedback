import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = props => {


    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="col1">
                    <h1>Questions</h1>
                    <Link to="/1">Q1</Link> 
                    <Link to="/2">Q2</Link>
                    <Link to="/3">Q3</Link> 
                    <Link to="/4">Q4</Link>
                    <Link to="/5">Q5</Link> 
                    <Link to="/6">Q6</Link>
                </div>
                {/* <div className="col2">
                    <Link to="/"><h1>Home</h1></Link>

                </div> */}
            </div>
            <p>Ministry of Finance Planning and Economic Development</p>
            <p>Uganda</p>
        </footer>
    )
}