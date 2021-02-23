import React from 'react'
import './QCheckbox.css'



export const QCheckbox = ({ isChecked, content, handleOptionSelected }) => {    

    const optionSelected = () => {
        handleOptionSelected()
    }

    return (
        <label>
            <input 
                type="checkbox" 
                className="checkbox" 
                checked={isChecked} 
                onChange={optionSelected}/>
            <span></span>
            {content}
        </label>
    )
    
}