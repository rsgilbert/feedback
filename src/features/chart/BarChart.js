import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import './BarChart.css'


export const BarChart = ({ data }) => {
    const colors = d3.scaleOrdinal(d3.schemeCategory10)

    /* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */  
    const parentEl = useRef(null)


    /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
    useEffect(() => {
        const parentDiv = document.querySelector(".parentDiv")
        console.log(parentDiv.clientHeight)
        const margin = { top: 20, right: 20, bottom: 80, left:80 }
        const width = parentDiv.clientWidth - margin.left - margin.right
        const height = parentDiv.clientHeight - margin.top - margin.bottom

        if(data && parentEl.current){
            const svg = d3.select(parentEl.current)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`)
    
            const xScale = d3.scaleLinear()
                .domain([0, d3.max(data, d => d[0])])
                .range([0, width])

            // x-axis
            svg.append("g")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(xScale))
                .selectAll("text")
                // .attr("transform", `translate(-10, 0)rotate(-45)`)
                .style('text-anchor', 'end')

            
            const yList = data.map(d => d[1])
            const yScale = d3.scaleBand()
                .range([0, height])
                .domain(yList)
                .paddingInner(".05")
            
            // y-axis
            svg.append("g")
                .call(d3.axisLeft(yScale))
                .attr("class", "bar-axis")

            // Bars
            svg.selectAll("myRect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", d => xScale(0))
                .attr("y", d => yScale(d[1]))
                .attr("width", d => xScale(d[0]))
                .attr("height", yScale.bandwidth())
                .attr("fill", (d, i) => colors(i))
        }
    })
       

    return (
        <div ref={parentEl} 
            className="parentDiv">
        </div>
            
    )
}