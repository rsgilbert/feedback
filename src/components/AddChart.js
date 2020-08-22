import React, { useState } from 'react'
import './AddChart.css'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { chartShown } from '../features/dashboard/dashboardSlice'

export const AddChart = ({ notShownCharts }) => {
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = e => setIsModalOpen(!isModalOpen)

    
    const renderNotShownCharts = () => {
        if(notShownCharts.length === 0) {
            return <p>All charts are shown </p>
        }
        else {
            return notShownCharts.map(chart => {
                const showChart = () => {
                    dispatch(chartShown(chart.id))
                    handleOpenModal()
                }            
                return (
                    <li className="chartoption" 
                        key={chart.id}
                        onClick={showChart}>
                        <p>
                            { chart.name }
                        </p>
                    </li>
                )
            })
        } 
    }

    return (
        <div className="add-container">
            <div className="addchart" onClick={handleOpenModal}>
                <span className="add-sign">+</span>
                <p className="add-message">Add chart</p>
            </div>
            <div className={classNames({
                "add-modal": true,
                notdisplayed: !isModalOpen
            })}>
                <div className="dialogbox">
                    <h1>Add a chart</h1>
                    <button 
                        className="addchart-close"
                        onClick={handleOpenModal}
                        >
                        &times;
                    </button>
                    <ul>
                        { renderNotShownCharts() }
                    </ul>                    
                </div>
            </div>
        </div>
    )
}