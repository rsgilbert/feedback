import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    id: "5",
    question: "How long did it take to resolve your issue?",
    options: [
        {
            id: "0",
            option: "Less than 1 hour"
        },
        {
            id: "1",
            option: "One day"
        },
        {
            id: "2",
            option: "One week (working days)"
        },
        {
            id: "3",
            option: "More than a week"
        }
    ],
    answerId: null
}

const q5Slice = createSlice({
    name: "q5",
    initialState,
    reducers: {
        answerIdUpdated(state, action) {
            const { answerId } = action.payload
            state.answerId = answerId
        }
    }
})


export const { answerIdUpdated } = q5Slice.actions
 
export default q5Slice.reducer

export const selectQuestion = state => state.q5.question

export const selectAllOptions = state => state.q5.options

export const selectAnswerId = state => state.q5.answerId