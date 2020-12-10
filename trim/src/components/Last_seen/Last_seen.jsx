import React from 'react'
import s from './Last_seen.module.css'

let Last_seen = ({last_seen}) => {
    return (
        <div className={s.last_seen_wrapper}>
            <div className={s.last_seen}>{last_seen}</div>
        </div>
    )
}
//You aren't autorized...
//Online
export default Last_seen