import React from 'react'
import s from './Statistic.module.css'

let Statistic = () => {
    return (
        <div className = {s.section_statistic}>
            <div className = {s.friends}>
                friends
            </div>
            <div className = {s.photos}>
                photos
            </div>
            <div className = {s.gifts}>
                gifts
            </div>
        </div>
    
    )
}

export default Statistic