import React from 'react'
import * as d3 from 'd3'


export const Dashboard = props => {
    const dataset = [ 15, 10, 15, 20, 25, 16 ]

    d3.select("div")
        .selectAll("p")
        .data(dataset)
        .enter()
        .append("p")
        .text(d => d)
        .style("color", d => {
            if(d > 15) return "darkred"
            return "blue"
        })
    
    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}