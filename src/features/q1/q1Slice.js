import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'


const initialState = {
    question: "What is your organization?",
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

    }
})

export default q1Slice.reducer

export const selectQuestion = state => state.q1.question

export const selectAllOptions = state => state.q1.options

export const selectAnswerId = state => state.q1.answerId