import React from 'react'
import * as d3 from 'd3'


export const Line = props => {
    const dataset = [
        { date: 1, count: 4 },
        { date: 2, count: 8 },
        { date: 3, count: 3 },
        { date: 4, count: 5 },
        { date: 5, count: 6 },
        { date: 6, count: 8 },
        { date: 7, count: 3 },
        { date: 8, count: 5 },
    ]

    const w = 500
    const h = 100
    const xPadding = 40
    const yPadding = 40
    
    const xScale = d3.scaleLinear()
        .domain([
            d3.min(dataset, d => d.date),
            d3.max(dataset, d => d.date)
        ])
        .range([0, w])

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, d => d.count)])
        .range([h, 0])


    const line = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.count))

    
    const svg = d3.select("#root")
        .append("svg")
        .attr("width", w + xPadding)
        .attr("height", h + 2*yPadding)

    svg.append("path")
        .datum(dataset)
        // .attr("class", "line")
        .attr("d", line)


    const xAxis = d3.axisBottom()
        .scale(xScale)

    svg.append("g")
        .attr("transform", `translate(0, ${h})`)
        .call(xAxis)

    const yAxis = d3.axisLeft()
        .scale(yScale)

    svg.append("g")
        .attr("transform", `translate(${xPadding}, ${0})`)
        .call(yAxis)

    return (
        <></>
    )
}