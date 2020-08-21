import React from 'react'
import './Chart.css'
import { getChart } from '../utils'


export const Chart = ({ chartId }) => {
    const renderChart = getChart(chartId)

    return (
        <>
            { renderChart }
        </>
    )
}