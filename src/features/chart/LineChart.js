import React from 'react'
import * as d3 from 'd3'


export const LineChart = props => {
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

    const margin = {
        top: 10,
        right: 30,
        bottom: 30,
        left: 60
    }
    const width = 460 - margin.left - margin.right
    const height = 400 - margin.top - margin.bottom

    const svg = d3.select("#root")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)

    const xScale = d3.scaleLinear()
        .domain(d3.extent(dataset, d => d.date))
        .range([0, width])

    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom().scale(xScale))


    const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, d => d.count)])
        .range([height, 0])
    
    svg.append("g")
        .call(d3.axisLeft().scale(yScale))

    const line = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.count))
    
    svg.append("path")
        .datum(dataset)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", line)


    return (
        <></>
    )
}