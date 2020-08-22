import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { Q1BarChart } from '../chart/Q1BarChart'
import { Q1PieChart } from '../chart/Q1PieChart'

const initialState = {
    charts: [
        {
            id: 10,
            name: "Bar chart",
            questionId: "1",
            isShown: true,
            getComponent: () => <Q1BarChart />
        },
        {
            id: 11,
            name: "Pie chart",
            questionId: "1",
            isShown: true,
            getComponent: () => <Q1PieChart />
        }, 
    ],
    q1: {
        id: "1",
        question: "1. What is your organization?",
        options: [
            {'id': '1', 'option': 'Abim District Local Government', count: 3 },
            {'id': '2', 'option': 'Adjumani District Local Government', count: 10 },
            {'id': '3', 'option': 'Agago District Local Government', count: 7 },
        ]
    },
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        chartShown(state, action) {
            const chartId = action.payload
            const chart = state.charts.find(ch => ch.id === chartId)
            chart.isShown = true
        }
    }
})


export const { chartShown } = dashboardSlice.actions


export default dashboardSlice.reducer

export const selectQ1Dashboard = state => state.dashboard.q1

export const selectQ1Charts = state => state.dashboard.charts.filter(chart => chart.questionId === "1")

export const selectShownQ1Charts = state => selectQ1Charts(state).filter(ch => ch.isShown)

export const selectNotShownQ1Charts = state => selectQ1Charts(state).filter(ch => !ch.isShown)