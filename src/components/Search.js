import React from 'react'
import styles from './Search.module.css'


export const Search = ({ searchWord }) => {

    return (
        <div className={styles.search}>
            <input placeholder="Search"/>
            <button>Search</button>
        </div>
    )
}