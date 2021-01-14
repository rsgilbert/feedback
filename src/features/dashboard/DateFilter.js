import React from 'react'



export const DateFilter = () => {
    const date = Date()


    return (
        <>
            <input 
                type="Date" 
                date={date} 
                defaultValue={Date()}
                value={date} />
        </>
    )
}