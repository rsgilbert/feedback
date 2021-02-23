import React from 'react'
import { useSelector } from 'react-redux'
import { selectQ1Dashboard } from '../dashboard/dashboardSlice'
import { BarChart } from './BarChart'
import { PieChart } from './PieChart'


export const Q1PieChart = props => {
    const q1Dashboard = useSelector(selectQ1Dashboard)
    const options = q1Dashboard.options

    const y = options.map(o => {
        let option = o.option
        return getAbbreviatedOrganizationName(option)
    })
    const x = options.map(o => o.count)
    const data = []
    for(let i = 0; i < x.length; i++) {

        data.push({ x: x[i], y: y[i] })
    }

    console.log("Data is ", data)
    return (
        <>
            <PieChart data={data}/>

        </>
    )
}

function getAbbreviatedOrganizationName(organization) {
    const words = organization.split(" ")
    let abbreviation = words[0] + " "
    for(let i = 1; i < words.length; i++) {
        abbreviation += words[i][0]
    }
    return abbreviation
}