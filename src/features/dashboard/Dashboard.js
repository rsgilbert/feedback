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

    d3.select("div")
        .selectAll("p")
        .data(dataset)
        .enter()
        .append("div")
        .text(d => d)
        .attr("class", "bar")
        .style("height", d => d * 5 + "px")
    
    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}