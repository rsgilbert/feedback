import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    search: ""
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchUpdated(state, action) {
            const { search } = action.payload
            state.search = search
        }
    }
})

export const { searchUpdated } = searchSlice.actions

export default searchSlice.reducer

export const selectSearch = state => state.search.search