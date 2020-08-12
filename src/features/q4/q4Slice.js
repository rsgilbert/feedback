import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    id: "4",
    question: "4. Rate your experience at the center",
    options: [
        {
            id: "1",
            option: "Excellent 🎉"
        },
        {
            id: "2",
            option: "Good 👍"
        },
        {
            id: "3",
            option: "Fair 🚀"
        },
        {
            id: "4",
            option: "Poor 👀"
        }
    ],
    answerId: null
}

const q4Slice = createSlice({
    name: "q4",
    initialState,
    reducers: {
        answerIdUpdated(state, action) {
            const { answerId } = action.payload
            state.answerId = answerId
        },
        q4answerCleared(state) {
            state.answerId = null
        }
    }
})


export const { answerIdUpdated, q4answerCleared } = q4Slice.actions
 
export default q4Slice.reducer

export const selectQuestion = state => state.q4.question

export const selectAllOptions = state => state.q4.options

export const selectAnswerId = state => state.q4.answerId

export const selectq4QA = state => {
    return {
        q: state.q4.id,
        a: state.q4.answerId
    }
}
