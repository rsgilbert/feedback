import React from 'react'
import * as d3 from 'd3'
import './Dashboard.css'
import { DashboardHeader } from '../../components/DashboardHeader'
import { Question } from '../../components/Question'
import { Q1Dashboard } from './Q1Dashboard'


export const Dashboard = props => {

    
    return (
        <>
            <DashboardHeader />
            <div className="dashboard">
                <Q1Dashboard />
            </div>
        </>
    )
}