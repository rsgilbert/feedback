import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    id: "1",
    question: "1. What is your organization?",
    options: [
        {
            id: "1",
            option: "Koboko Local Government"
        },
        {
            id: "2",
            option: "Wakiso Municipality"
        },
        {
            id: "3",
            option: "Kabale Local Government"
        },
        {
            id: "4",
            option: "Makerere University"
        },
        {
            id: "5",
            option: "Muni University"
        },
    ],
    answerId: null
}

const q1Slice = createSlice({
    name: "q1",
    initialState,
    reducers: {
        answerIdUpdated(state, action) {
            const { answerId } = action.payload
            state.answerId = answerId
        }
    }
})

export const { answerIdUpdated } = q1Slice.actions
 
export default q1Slice.reducer

export const selectQuestion = state => state.q1.question

export const selectAllOptions = state => state.q1.options

export const selectAnswerId = state => state.q1.answerId