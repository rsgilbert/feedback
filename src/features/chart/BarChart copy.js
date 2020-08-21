import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'

export const BarChart = data => {
    /* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) 
    */  
    const svgEl = useRef(null)

    /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 
    */
    useEffect(() => {
        const margin = { top: 20, right: 20, bottom: 70, left:20 }
        const width = 600 - margin.left - margin.right
        const height = 300 - margin.top - margin.bottom

        if(data && svgEl.current){
            const svg = d3.select(svgEl.current)
                .append("svg")
                .attr("x", 3)
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

            
            const yScale = d3.scaleBand()
                .range([0, height])
                .domain(data, d => d[1])
                .range([0, height])
                .paddingInner(".05")
            // y-axis
            svg.append("g")
                .call(d3.axisLeft(yScale))

            // Bars
            svg.selectAll("myRect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", d => xScale(d[0]))
                .attr("y", d => yScale(d[1]))
                .attr("width", d => xScale(d[0]))
                .attr("height", yScale.bandwidth())
        }
    },
    /*
        useEffect has a dependency array (below). It's a list of dependency
        variables for this useEffect block. The block will run after mount
        and whenever any of these variables change. We still have to check
        if the variables are valid, but we do not have to compare old props
        to next props to decide whether to rerender.
    */
    [data, svgEl.current])
       

    return (
        <div>
        p
            <svg 
                ref={svgEl}
                />   
            k
        </div>
            
    )
}