import React from 'react'
import './ChartList.css'
import { Chart } from './Chart'
import { AddChart } from './AddChart'

export const ChartList = ({ shownCharts, notShownCharts }) => {

    const renderCharts = shownCharts.map(chart => 
        <Chart chart={chart} key={chart.id}/>    
    )


    return (
        <div className="chartlist">
            { renderCharts }
            <AddChart notShownCharts={notShownCharts}/>
        </div>
    )
}