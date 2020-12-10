import React from 'react'
import s from './Friend.module.css'

let Friend = (props) => {
    return (
        <div>
            <div className={s.friends_items}>
                <div className={s.friends_photo}>
                    <img src={props.src} alt={props.alt} />
                </div>
                <div className={s.friends_name}>{props.name}</div>
            </div>
        </div>
    )
}

export default Friend