import { createSlice } from '@reduxjs/toolkit'
import { getAllChartIds } from '../../utils'


const initialState = {
    q1: {
        id: "1",
        question: "1. What is your organization?",
        options: [
            {'id': '1', 'option': 'Abim District Local Government', count: 3 },
            {'id': '2', 'option': 'Adjumani District Local Government', count: 10 },
            {'id': '3', 'option': 'Agago District Local Government', count: 7 },
        ],
        chartIds: [getAllChartIds().q1BarChart]
    },
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
    
    }
})


export const {  } = dashboardSlice.actions


export default dashboardSlice.reducer

export const selectQ1Dashboard = state => state.dashboard.q1