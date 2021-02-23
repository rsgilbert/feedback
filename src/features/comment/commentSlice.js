import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    id: "7",
    question: "7. Any comment?",
    comment: '',
}

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        commentUpdated(state, action) {
            const { comment } = action.payload
            state.comment = comment
        },

        commentCleared(state) {
            state.comment = ''
        }
    }
})


export const { commentUpdated, commentCleared } = commentSlice.actions
 
export default commentSlice.reducer

export const selectQuestion = state => state.comment.question

export const selectCommentQA = state => {
    return {
        comment: state.comment.comment
    }
}





