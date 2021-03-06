import React from 'react'
import * as d3 from 'd3'
import './Column.css'


export const Column = props => {
    const dataset = [
        ["0k", 1],
        ["1j", 10],
        ["g2", 5],
        ["j3", 7]
    ]
    const w = 500
    const h = 200
    const xPadding = 40
    const yPadding = 40


    const svg = d3.select("#root")
        .append("svg")
        .attr("width", w + xPadding)
        .attr("height", h + 2 * yPadding)

    const xDomain = dataset.map(d => d[0])

    const xScale = d3.scaleBand()
        .domain(xDomain)
        .rangeRound([0, w])
        .paddingInner(.05)

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, d => d[1])])
        .range([0, h])



    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", d => xScale(d[0]) + xPadding)
        .attr("y", d => h + yPadding - yScale(d[1]))
        .attr("width", xScale.bandwidth())
        .attr("height", d => yScale(d[1]))


    // axes
    const xAxis = d3.axisBottom()
        .scale(xScale)

    svg.append('g')
        .attr('class', 'column-axis')
        .attr('transform', `translate(${xPadding},${h + yPadding})`)
        .call(xAxis)
        

    const yAxis = d3.axisLeft()
        .scale(yScale)
    

    svg.append('g')
        .attr('class', 'column-axis')
        .attr('transform', `translate(${xPadding}, ${yPadding})`)
        .call(yAxis)
        

    return (
        <div className="chart-column">

        </div>
    )
}