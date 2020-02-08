import React from 'react'
import s from './Last_seen.module.css'

let Last_seen = (props) => {
    return (
        <div className={s.last_seen_wrapper}>
            <div className={s.last_seen}>{props.last_seen}</div>
        </div>
    )
}
//last seen 5 minutes ago...
//Online
export default Last_seen