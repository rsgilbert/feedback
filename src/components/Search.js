import React from 'react'
import styles from './Search.module.css'
import { selectSearch, searchUpdated } from '../features/search/searchSlice'
import { useSelector, useDispatch } from 'react-redux'


export const Search = props => {
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()

    const onSearchChanged = e =>
        dispatch(searchUpdated({ search: e.target.value }))
    
    return (
        <div className={styles.search}>
            <div className={styles.input}>
                <input 
                    placeholder="Search" 
                    onChange={onSearchChanged}
                    value={search}
                    />
            </div>
            
            <button>Search</button>
        </div>
    )
}