import React from 'react'
import './AddChart.css'


export const AddChart = props => {


    return (
        <div className="addchart">
            <span className="add-sign">+</span>
            <p className="add-message">Add chart</p>
            <div className="add-modal notdisplayed">
                <div className="dialogbox">
                    <h1>Add a chart</h1>
                    <div className="chartoption">
    
                        <p>Pie chart</p>
                    </div>
                    <div className="chartoption">
                    
                        <p>Line graph</p>
                    </div>
             
                    <div className="chartoption">
                    
                        <p>Area chart</p>
                    </div>
                    <div className="chartoption">
                    
                        <p>Area chart</p>
                    </div>
                        <div className="chartoption">
    
                        <p>Pie chart</p>
                    </div>
                    <div className="chartoption">
                    
                        <p>Line graph</p>
                    </div>
             </div>
            </div>
        </div>
    )
}