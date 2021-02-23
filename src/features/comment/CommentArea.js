import React from 'react'
import { useDispatch } from 'react-redux'
import './CommentArea.css'
import { commentUpdated } from './commentSlice'


export const CommentArea = props => {
    const dispatch = useDispatch()

    const handleOnChange = e => {
        var comment = e.target.value
        dispatch(commentUpdated({ comment }))
    }

    return (
        <>
            <textarea className="comment-area" onChange={handleOnChange} />
        </>
    )
}