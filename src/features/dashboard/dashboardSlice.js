import { createSlice } from '@reduxjs/toolkit'
import { Q1BarChart } from '../chart/Q1BarChart'
import { Q1PieChart } from '../chart/Q1PieChart'

const initialState = {
    regions: [
        {
            id: "1",
            name: "Hoima",
            isSelected: false
        },
        {
            id: "2",
            name: "Kampala",
            isSelected: true
        },
        {
            id: "3",
            name: "Mbale",
            isSelected: false
        },
    ],
    questions: [
        {
            id: "1",
            question: "1. What is your organization?",
            isSelected: true,
        }, 
        {
            id: "2", 
            question: "2. What is your name?",
            isSelected: false,
        },
    ],
    feedback: [
        {
            id: "1",
            question: {
                id: "1",
                question: "1. What is your organization?",
                isSelected: true,
            },
            options: [
                {'id': '1', 'option': 'Abim District Local Government', count: 3 },
                {'id': '2', 'option': 'Adjumani District Local Government', count: 10 },
                {'id': '3', 'option': 'Agago District Local Government', count: 7 },
            ]
        },
        {
            id: "2",
            question: {
                id: "2", 
                question: "2. What is your name?",
                isSelected: false,
            },
            options: [
                {'id': '1', 'option': 'Abim District Local Government', count: 3 },
                {'id': '2', 'option': 'Adjumani District Local Government', count: 10 },
                {'id': '3', 'option': 'Agago District Local Government', count: 7 },
            ]
        }
    ]
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        chartShown(state, action) {
            const chartId = action.payload
            const chart = state.charts.find(ch => ch.id === chartId)
            chart.isShown = true
        },

        questionOptionSelected(state, action) {
            const questions = state.questions
            const { questionId } = action.payload
            const question = questions.find(q => q.id === questionId)
            const otherQuestions = questions.filter(q => q.id !== questionId)
            question.isSelected = true
            otherQuestions.forEach(oq => oq.isSelected = false)
        },

        regionSelected(state, action) {
            const regions = state.regions
            const { regionId, isSelected } = action.payload
            const region = regions.find(r => r.id === regionId)
            region.isSelected = isSelected
        }
    }
})


export const { 
    chartShown,
    questionOptionSelected,
    regionSelected,
} = dashboardSlice.actions


export default dashboardSlice.reducer

export const selectFeedback = state => state.dashboard.feedback

export const selectQuestions = state => state.dashboard.questions

export const selectRegions = state => state.dashboard.regions



export const selectQ1Dashboard = state => state.dashboard.q1

//export const selectQ1Charts = state => state.dashboard.charts.filter(chart => chart.questionId === "1")

// export const selectShownQ1Charts = state => selectQ1Charts(state).filter(ch => ch.isShown)

// export const selectNotShownQ1Charts = state => selectQ1Charts(state).filter(ch => !ch.isShown)