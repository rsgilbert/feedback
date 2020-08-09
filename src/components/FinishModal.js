import React, { useState } from 'react'
import styles from './OtherModal.module.css'
import classNames from 'classnames'
import { MyButton } from './MyButton'
import { useSelector, useDispatch } from 'react-redux'
import { selectOther, otherUpdated, selectIsModalOpen, modalClosed } from '../features/other/otherSlice'
import { answersUpdated } from '../features/q3/q3Slice'
import { selectFinishIsModalOpen } from '../features/finish/finishSlice'

export const FinishModal = props => {

    const isModalOpen = useSelector(selectFinishIsModalOpen)
   
    return (
        <div className={classNames({
            [styles.othermodal]: true,
            [styles.notdisplayed]: !isModalOpen
        })}>
            <div className={styles.dialogbox} onClick={nothing}>
                <h1>Reason</h1>
                <button 
                    className={styles.close}
                    onClick={closeModal}>Close</button>
                <input 
                    placeholder="Other"
                    autoFocus
                    value={otherValue}
                    onChange={handleChange}

                    />
                <MyButton title="submit" handleClick={handleSubmit}/>
            </div>
        </div>
    )
}