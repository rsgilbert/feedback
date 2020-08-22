import React from 'react'
import './Chart.css'

export const Chart = ({ chart }) => {
    const renderChart = chart.getComponent()

    return (
        <>
            { renderChart }
        </>
    )
}