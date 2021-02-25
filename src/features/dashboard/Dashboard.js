import React from 'react'
import * as d3 from 'd3'
import './Dashboard.css'
import { DashboardHeader } from '../../components/DashboardHeader'
import { LeftSidebar } from './LeftSidebar'
import { RightSidebar } from './RightSidebar'
import { BarChart } from '../chart/BarChart'
import { Q1BarChart} from '../chart/Q1BarChart'
import { Q1Dashboard } from './Q1Dashboard'


export const Dashboard = props => {

    return (
        <Q1Dashboard />
    )
    // return (
    //     <>
    //         <div className="dashboard">
    //             <div className="left-sidebar">
    //                 <LeftSidebar/>
    //             </div>
    //             <div className="dashboard-main">
    //                 {/* <Q1BarChart /> */}

    //             </div>
    //             <div className="right-sidebar">
    //                 <RightSidebar />
    //             </div>
    //         </div>
    //     </>
    // )
}