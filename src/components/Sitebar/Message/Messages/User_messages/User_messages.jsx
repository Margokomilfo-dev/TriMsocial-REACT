import React from 'react'
import s from './User_messages.module.css'

let User_messages = (props) => {
    return (
        <div className={s.user_message}>
            <div>
            {props.message}
            </div>
        </div>
    )
}

export default User_messages