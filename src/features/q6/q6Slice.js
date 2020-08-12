import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    id: "6",
    question: "6. Have you visited the Regional Treasury Service Center before? If yes, please rate the experience",
    options: [
        { 
            id: "1",
            option: "No, I have never visited"
        },
        {
            id: "2",
            option: "Excellent 🎉"
        },
        {
            id: "3",
            option: "Good 👍"
        },
        {
            id: "4",
            option: "Fair 🚀"
        },
        {
            id: "5",
            option: "Poor 👀"
        }
    ],
    answerId: null
}

const q6Slice = createSlice({
    name: "q6",
    initialState,
    reducers: {
        answerIdUpdated(state, action) {
            const { answerId } = action.payload
            state.answerId = answerId
        },
        q6answerCleared(state) {
            state.answerId = null
        }
    }
})


export const { answerIdUpdated, q6answerCleared } = q6Slice.actions
 
export default q6Slice.reducer

export const selectQuestion = state => state.q6.question

export const selectAllOptions = state => state.q6.options

export const selectAnswerId = state => state.q6.answerId

export const selectq6QA = state => {
    return {
        q: state.q6.id,
        a: state.q6.answerId
    }
}
