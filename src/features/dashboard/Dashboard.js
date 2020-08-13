import React from 'react'
import * as d3 from 'd3'
import './Dashboard.css'


function randomDataset(count) {
    const dataset = []
    for (let i = 0; i < count; i++) {
        dataset.push(Math.floor(Math.random() * 31))
    }
    console.log(dataset)
    return dataset
}

export const Dashboard = props => {
    const dataset = randomDataset(10)

    const svg = d3.select("div").append("svg")
    const w = 500
    const h = 100
    const barPadding = 5
    svg.attr("width", w)
        .attr("height", h)

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * (w / dataset.length))
        .attr("y", d => h - 2 * d)
        .attr("width", w / dataset.length - barPadding)
        .attr("height", d => 2 * d)
        .attr("fill", d => `rgb(0, ${Math.round(10 * d)}, 0)`)


    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(d => d)
        .attr("x", (d, i) => i * w / dataset.length + (w / dataset.length - barPadding) / 2)
        .attr("y", d => h - 7)
        .attr("stroke", "white")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
    return (
        <>
            <p>
                {/* Dashboard</p> */}
            </p>
        </>
    )
}