import React from 'react'
import { useSelector } from 'react-redux'
import { selectQ1Dashboard, selectQ1Charts, selectNotShownQ1Charts, selectShownQ1Charts,  } from './dashboardSlice'
import { Question } from '../../components/Question'
import { ChartList } from '../../components/ChartList'


export const Q1Dashboard = props => {

    const q1Dashboard = useSelector(selectQ1Dashboard)
    const shownCharts = useSelector(selectShownQ1Charts)
    const notShownCharts = useSelector(selectNotShownQ1Charts)

    return (
        <div id="q1" className='container'>
            <Question question={"Q" + q1Dashboard.question} />
            <div className="charts">
                <ChartList shownCharts={shownCharts} notShownCharts={notShownCharts}/>
            </div>
        </div>
    )
}