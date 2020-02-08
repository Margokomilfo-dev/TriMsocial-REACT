import React from 'react'
import s from './User_messages.module.css'

let User_messages = (props) => {
    return (
        <div className={s.user_message}>
            <div className={s.ava}></div>
            {props.message}
        </div>
    )
}

export default User_messages