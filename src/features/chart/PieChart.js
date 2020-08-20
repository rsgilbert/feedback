import React from 'react'
import * as d3 from 'd3'


export const PieChart = props => {
    const dataset = [5, 10, 20, 45, 6, 25]
    const pie = d3.pie()
    const colors = d3.scaleOrdinal(d3.schemeCategory10)

    const w = 300
    const h = 300
    const outerRadius = w / 2
    const innerRadius = 0

    const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)


    const svg = d3.select("#root")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
    
    const arcs = svg.selectAll("g.arc")
        .data(pie(dataset))
        .enter()
        .append("g")
        .attr("class", "arc")
        .attr("transform", `translate(${outerRadius}, ${outerRadius})`)

    arcs.append("path")
        .attr("fill", (d, i) => colors(i))
        .attr("d", arc)

    console.log(`KK${arc.centroid(.2)}`)
    arcs.append("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .text(d => d.value)
        .style("fill", "white")

    return (
        <></>
    )
}