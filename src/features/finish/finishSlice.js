import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isModalOpen: false
}

const finishSlice = createSlice({
    name: "finish",
    initialState,
    reducers: {        
        finsihModalOpened(state) {
            state.isModalOpen = true
        },

        finishModalClosed(state) {
            state.isModalOpen = false
        }
    }
})

export const { finishModalOpened, finishModalClosed } = finishSlice.actions

export default finishSlice.reducer

export const selectFinishIsModalOpen = state => state.finish.isModalOpen