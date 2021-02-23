import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    id: "3",
    question: "3. Why did you visit the Treasury Service Center? (Select all that apply)",
    options: [
        {
            id: "1",
            option: "e-registration"
        },
        {
            id: "2",
            option: "Master data"
        },
        {
            id: "3",
            option: "Cash limits"
        },
        {
            id: "4",
            option: "Warrants"
        },
        {
            id: "5",
            option: "Other"
        },
    ],
    answers: []
}

const q3Slice = createSlice({
    name: "q3",
    initialState,
    reducers: {
        answersUpdated(state, action) {     
            let { answerId, reason } = action.payload
            if(answerId !== "5") {    
                const matchingAnswer = state.answers.find(ans => ans.answerId === answerId)
                const isAnswer = Boolean(matchingAnswer)
                if(isAnswer) {
                    // remove it
                    state.answers = state.answers.filter(ans => ans.answerId !== answerId)
                } else {
                    state.answers.push({ answerId, reason })
                }   
            } else {
                state.answers = state.answers.filter(ans => ans.answerId !== "5")
                if(reason && reason.trim()) {
                    reason = reason.trim()
                    state.answers.push({ answerId, reason })
                }
            }
        },
        q3answersCleared(state) {
            state.answers = []
        }
    }
})


export const { answersUpdated, q3answersCleared } = q3Slice.actions
 
export default q3Slice.reducer

export const selectQuestion = state => state.q3.question

export const selectAllOptions = state => state.q3.options

export const selectAnswers = state => state.q3.answers

export const selectq3QA = state => {
    return {
        q: state.q3.id,
        a: state.q3.answers
    }
}
