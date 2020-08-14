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
    var dataset = [
        [5, 10],  [200, 20], [400, 100],
    [5, 20], [4, 90], [250, 50], [100, 33], [330, 95],
    [410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [50, 50]
    ];
    
    var dates = [
        {
            timestamp: 1597410599034,
            sales: 100
        },
        {
            timestamp: 1597410591034,
            sales: 500
        },
        {
            timestamp: 1597410539034,
            sales: 450
        },
        {
            timestamp: 1597410559034,
            sales: 200
        },
        {
            timestamp: 1597410509034,
            sales: 105
        },
    ]

    const dateDataset = dates.map(d => ({
        date: new Date(d.timestamp),
        sales: d.sales
    }))

    const formatTime = d3.timeFormat("%b %e")

    const svg = d3.select("div").append("svg")
    const w = 500
    const h = 200
    const padding = 20

    const tScale = d3.scaleTime()
        .domain([
            d3.min(dateDataset, d => d.date),
            d3.max(dateDataset, d => d.date)
        ])
        .range([padding, w + padding])


    const salesScale = d3.scaleLinear()
        .domain([0, d3.max(dateDataset, d => d.sales)])
        .range([padding, h - padding])

    // const xScale = d3.scaleLinear()
    //     .domain([0, d3.max(dataset, d => d[0])])
    //     .range([padding, w - padding])
  

    // const yScale = d3.scaleLinear()
    //     .domain([0, d3.max(dataset, d => d[1])])
    //     .range([h + padding, padding])

    // const areaScale = d3.scaleSqrt()
    //     .domain([0, d3.max(dataset, d=> d[1])])
    //     .range([5, 15])
    


    svg.attr("width", w + 100)
        .attr("height", h + 100)

    // svg.selectAll("circle")
    //     .data(dataset)
    //     .enter()
    //     .append("circle")
    //     .attr("cx", d => xScale(d[0]))
    //     .attr("cy", d => yScale(d[1]))
    //     .attr("r", 5)
    //     .attr("r", d => areaScale(d[1]))
    //     // .attr("r", d => Math.sqrt(( 5 * d[1])))
    //     .attr("fill", "red")

    // svg.selectAll("text")
    //     .data(dataset)
    //     .enter()
    //     .append("text")
    //     .text(d => "(" + d[0] + ", " + d[1] + ")")
    //     .attr("x", d => xScale(d[0]))
    //     .attr("y", d => yScale(d[1]))
    //     .attr("font-size", 14)

    /* set scale for dates */
    svg.selectAll("circle")
        .data(dateDataset)
        .enter()
        .append("circle")
        .attr("cx", d => tScale(d.date))
        .attr("cy", d => salesScale(d.sales))
        .attr("r", 5)
        .attr("fill", "gold")

    svg.selectAll("text")
        .data(dateDataset)
        .enter()
        .append("text")
        .text(d => d.sales + ", " + formatTime(d.date))
        .attr("x", d => tScale(d.date))
        .attr("y", d => salesScale(d.sales))
    return (
        <>
            <p>
                {/* Dashboard</p> */}
            </p>
        </>
    )
}