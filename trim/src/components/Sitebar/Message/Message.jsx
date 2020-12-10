import React from 'react'
import s from './Message.module.css'
import Users from './Users/Users'
import MessagesContainer from "./Messages/MessagesContainer";

let Message = (props) => {
    return (
        <div className={s.message}>
            <Users userData={props.userData}/>
            <MessagesContainer />
        </div>
    )
}

export default Message