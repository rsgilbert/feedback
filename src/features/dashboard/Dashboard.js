import React from 'react'
import * as d3 from 'd3'
import './Dashboard.css'


function randomDataset(count) {
    const dataset = []
    for(let i = 0; i < count; i++) {
        dataset.push(Math.floor(Math.random() * 31))
    }
    console.log(dataset)
    return dataset
}

export const Dashboard = props => {
    const dataset = randomDataset(5)

    const svg = d3.select("div").append("svg")
    const w = 500
    const h = 100
    svg.attr("width", w)
        .attr("height", h)

    const circles = svg.selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
        .attr("fill", "yellow")
        .attr("stroke", "orange")
        .attr("stroke-width", d => d / 2)


    circles.attr("cx", (d, i) => {
        return (i * 50) + 25
    })
        .attr("cy", h / 2)
        .attr("r", d => d)


    return (
        <>
            <p>
                {/* Dashboard</p> */}
            </p>
        </>
    )
}