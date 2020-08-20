import React from 'react'
import * as d3 from 'd3'
import './Dashboard.css'
import { Column } from '../chart/Column';
import { Line } from '../chart/Line';
import { LineChart } from '../chart/LineChart';
import { PieChart } from '../chart/PieChart';

export const D = props => {
    var dataset = [
        [5, 10],  [200, 20], [400, 100],
    // [5, 20], [4, 90], [250, 50], [100, 33], [330, 95],
    // [410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [50, 50]
    ];
    
 

    return (
        <div className="chart" id="ch">
            {/* <Column /> */}
            {/* <Line /> */}
            {/* <LineChart /> */}
            <PieChart />
        </div>
    )
}