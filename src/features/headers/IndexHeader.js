import React from 'react'
import './IndexHeader.css'

export const IndexHeader = props => {
    const title = "TREASURY SERVICE CENTER"

    return (
        <div className="index-header">  
            <h1>{ title }</h1>
        </div>
    )
}