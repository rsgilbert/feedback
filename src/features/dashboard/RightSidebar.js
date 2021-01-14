import React from 'react'
import './RightSidebar.css'
import { QOption } from './QOption'

import { useDispatch, useSelector } from 'react-redux'
import { regionSelected, selectRegions } from './dashboardSlice'
import { SelectTitle } from './SelectTitle'
import { QCheckbox } from './QCheckbox'


export const RightSidebar = () => {
    const dispatch = useDispatch()

    const regions = useSelector(selectRegions)

    const renderRegions = regions.map(region => {
        const regionId = region.id
        const isChecked = region.isSelected
        const content = region.name

        const handleOptionSelected = () => {
            dispatch(regionSelected({ regionId }))
        }

        return (
            <QCheckbox 
                isChecked={isChecked}
                content={content}
                handleOptionSelected={handleOptionSelected}
                key={regionId}
                />
        )
    })
    return (
        <div className="right-sidebar">
            <SelectTitle title="Start Date" />
            <div className="region">
                <SelectTitle title="Select Region" />
                { renderRegions }
            </div>
        </div>
    )
}