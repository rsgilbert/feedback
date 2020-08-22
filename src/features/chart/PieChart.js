import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'


export const PieChart = ({ data }) => {
    const colors = d3.scaleOrdinal(d3.schemeCategory10)
    const parentEl = useRef(null)
    const pie = d3.pie()

    const xData = data.map(d => d.x)
    /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
    useEffect(() => {
        const parentDiv = document.querySelector("#q1PieChartDiv")
        const margin = { top: 20, right: 20, bottom: 80, left:80 }
        const width = parentDiv.clientWidth - margin.left - margin.right
        const height = parentDiv.clientHeight - margin.top - margin.bottom

        // if(data && parentEl.current){
            const svg = d3.select(parentEl.current)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`)
    
            const outerRadius = height / 2
            const innerRadius = 0

            const arc = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius)

            
            const arcs = svg.selectAll("g.arc")
                .data(pie(xData))
                .enter()
                .append("g")
                .attr("class", "arc")
                .attr("transform", `translate(${outerRadius}, ${outerRadius})`)

            arcs.append("path")
                .attr("fill", (d, i) => colors(i))
                .attr("d", arc)

            arcs.append("text")
                .attr("transform", d => `translate(${arc.centroid(d)})`)
                .attr("text-anchor", "middle")
                .text(d => d.value)
                .style("fill", "white")
        // }
    }, [data, parentEl.current])

    return (
        <div ref={parentEl} 
            id="q1PieChartDiv">
        </div>       
    )
}