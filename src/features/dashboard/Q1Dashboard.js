import React from 'react'
import { useSelector } from 'react-redux'
import { selectQ1Dashboard } from './dashboardSlice'
import { Question } from '../../components/Question'
import { ChartList } from '../../components/ChartList'


export const Q1Dashboard = props => {

    const q1Dashboard = useSelector(selectQ1Dashboard)


    return (
        <div id="q1" className='container'>
            <Question question={"Q" + q1Dashboard.question} />
            <div className="charts">
                <ChartList chartIds={q1Dashboard.chartIds}/>
            </div>
        </div>
    )
}