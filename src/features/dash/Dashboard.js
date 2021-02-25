import React from 'react'
import { LineChart, Line } from 'recharts';
import MyLineChart from './MyLineChart'
import MyBarGraph from './MyBarGraph'





const experienceData = [
    { date: '18/2/2020', Excelent: 40, Good: 240, Fair: 240, Poor: 100 },
    { date: '25/2/2020', Excelent: 30, Good: 40, Fair: 200, Poor: 50 },
    { date: '3/3/2020', Excelent: 70, Good: 24, Fair: 100, Poor: 42 }
];

const purposeData = [
    { name: "E-Registration", count: 10 },
    { name: "Master Data", count: 30 },
    { name: "Cash Limits", count: 40 },
    { name: "Warrants", count: 24 },
    { name: "Other", count: 23 }
]

export const Dash = (props) => {

    // const { loading, error, data } = useQuery(GET_ITEMS)
    // if(loading) {
    //     return 'Loading'
    // }
    // if(error) {
    //     return `Error. ${error.message}`
    // }
    // if(data) {
    // console.log(data)
    // }

    return (
        <div
            className="container mydashboard"
        >
            <h3>Purpose of visiting the Treasury Service Center</h3>
            <MyBarGraph data={purposeData} />

            <h3>Experience at Treasury Service Center</h3>
            <MyLineChart data={experienceData} />

            <div>
                <h1>Comments</h1>
                <p>Very long line</p>                
                <p>My issue was not resolved</p>
                <p>It takes too long to receive an updates</p>

            </div>

        </div>
    )
}


