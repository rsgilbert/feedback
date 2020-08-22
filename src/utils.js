// import * as firebase from "firebase/app"
import React from 'react'
import { Q1BarChart } from './features/chart/Q1BarChart';


export function getQuestionNumber() {
    const pathname = window.location.pathname
    return parseInt(pathname.substring(1))
}

export function initializeFirebase() {
    // Generated from https://console.firebase.google.com/project/tsc-feedback/settings/general/web:ODhjMWNlMDktMDc4ZS00ZWZlLTg1MjItMTY5NTIyNTFlOTg5
    const firebaseConfig = {
        apiKey: "AIzaSyAV3vZxXS4A4iE0N3ZIlUQwo09B7yl47og",
        authDomain: "tsc-feedback.firebaseapp.com",
        databaseURL: "https://tsc-feedback.firebaseio.com",
        projectId: "tsc-feedback",
        storageBucket: "tsc-feedback.appspot.com",
        messagingSenderId: "157433617722",
        appId: "1:157433617722:web:d5fdcaf003f34418b80403",
        measurementId: "G-QJMBGW5K5H"
      };
    // Initialize Firebase
    // if(!firebase.apps.length) {
    //     firebase.initializeApp(firebaseConfig);
    // }
}


export function randomDataset(count) {
    const dataset = []
    for (let i = 0; i < count; i++) {
        dataset.push(Math.floor(Math.random() * 31))
    }
    console.log(dataset)
    return dataset
}

export function getCharts() {
    return [
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
            isShown: false,
            getComponent: () => <Q1BarChart />
        },
        
    ]
}

// export function getAllChartIds() {
//     return {
//         q1BarChart: 10,
//         q1PieChart: 11,
//         q1LineGraph: 12,
//         q1AreaChart: 13,
//         q1ColumnChart: 14
//     }
// }

// export function getChart(chartId) {
//     switch(chartId) {
//         case getAllChartIds().q1BarChart: return <Q1BarChart />
//     }
// }