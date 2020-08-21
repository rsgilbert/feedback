import React from 'react'
import './ChartList.css'
import { Chart } from './Chart'
import { AddChart } from './AddChart'

export const ChartList = props => {

    const renderCharts = props.chartIds.map(chartId => 
        <Chart chartId={chartId} key={chartId}/>    
    )


    return (
        <div className="chartlist">
            { renderCharts }
            <AddChart />
        </div>
    )
}