import React from 'react'
import * as d3 from 'd3'


export const Column = props => {
    const dataset = [
        ["0", 1],
        ["1", 10],
        ["2", 5],
        ["3", 7]
    ]
    const w = 500
    const h = 100
    const padding = 40


    const svg = d3.select("#root")
        .append("svg")
        .attr("width", w)
        .attr("height", h)


    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * ( w / dataset.length))
        .attr("y", d => h - d[1] * 4)
        .attr("width", w / dataset.length - padding)
        .attr("height", d => d[1] * 4)


    return (
        <div className="chart-column">

        </div>
    )
}