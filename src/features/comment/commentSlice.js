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
        answerIdUpdated(state, action) {
            const { answerId } = action.payload
            state.answerId = answerId
        },
        q2answerCleared(state) {
            state.answerId = null
        }
    }
})


export const { answerIdUpdated, q2answerCleared } = commentSlice.actions
 
export default commentSlice.reducer

export const selectQuestion = state => state.comment.question






