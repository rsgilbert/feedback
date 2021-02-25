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
    { name: "E-Reg", count: 10 },
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
            <h1>What was your purpose of visiting the Treasury Service Center?</h1>
            <MyBarGraph data={purposeData} />

            <div>
                <h2>Comments</h2>
                <p>Great job you guys!</p>
                <p>The service center was closed</p>                
                <p>There was no one to serve</p>
                <p>It takes too long to receive an updates</p>
            </div>

            <br></br>
            <h1>What was your experience at Treasury Service Center</h1>
            <MyLineChart data={experienceData} />

            <br></br>
            <div>
                <h2>Comments</h2>
                <p>People did not wear masks</p>
                <p>I went throught avery long line</p>                
                <p>Some people are rude here</p>
                <p>It takes too long to receive an updates</p>
            </div>

        </div>
    )
}


