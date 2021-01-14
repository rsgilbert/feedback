import React from 'react'
import * as d3 from 'd3'
import './Dashboard.css'
import { DashboardHeader } from '../../components/DashboardHeader'
import { LeftSidebar } from './LeftSidebar'
import { RightSidebar } from './RightSidebar'



export const Dashboard = props => {

    
    return (
        <>
            <div className="dashboard">
                <div className="left-sidebar">
                    <LeftSidebar/>
                </div>
                <div className="dashboard-main">
                    k
                </div>
                <div className="right-sidebar">
                    <RightSidebar />
                </div>
            </div>
        </>
    )
}