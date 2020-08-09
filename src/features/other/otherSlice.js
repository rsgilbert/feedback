import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    other: "",
    isModalOpen: false
}

const otherSlice = createSlice({
    name: "other",
    initialState,
    reducers: {
        otherUpdated(state, action) {
            const { other } = action.payload
            state.other = other
        },

        otherCleared(state) {
            state.other = ""
        },
        modalOpened(state) {
            state.isModalOpen = true
        },

        modalClosed(state) {
            state.isModalOpen = false
        }
    }
})

export const { otherUpdated, otherCleared, modalOpened, modalClosed } = otherSlice.actions

export default otherSlice.reducer

export const selectOther = state => state.other.other

export const selectIsModalOpen = state => state.other.isModalOpen