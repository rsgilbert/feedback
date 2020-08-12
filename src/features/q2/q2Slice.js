import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    id: "2",
    question: "2. Which Regional Center did you visit?",
    options: [
        {
            id: "1",
            option: "Arua Regional Center"
        },
        {
            id: "2",
            option: "Gulu Regional Center"
        },
        {
            id: "3",
            option: "Mbarara Regional Center"
        },
        {
            id: "4",
            option: "Kampala Regional Center"
        },
        {
            id: "5",
            option: "Moroto Regional Center"
        },
        {
            id: "6",
            option: "Soroti Regional Center"
        },
        {
            id: "7",
            option: "Jinja Regional Center"
        },
        {
            id: "8",
            option: "Mbale Regional Center"
        },
        {
            id: "9",
            option: "Hoima Regional Center"
        }
    ],
    answerId: null
}

const q2Slice = createSlice({
    name: "q2",
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


export const { answerIdUpdated, q2answerCleared } = q2Slice.actions
 
export default q2Slice.reducer

export const selectQuestion = state => state.q2.question

export const selectAllOptions = state => state.q2.options

export const selectAnswerId = state => state.q2.answerId

export const selectq2QA = state => {
    return {
        q: state.q2.id,
        a: state.q2.answerId
    }
}



