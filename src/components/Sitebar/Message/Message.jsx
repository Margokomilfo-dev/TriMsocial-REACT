import React from 'react'
import s from './Message.module.css'
import Users from './Users/Users'
import Messages from './Messages/Messages'

let Message = (props) => {
    return (
        <div className={s.message}>
            <Users userData={props.messagePage.userData}/>
            <Messages messageData={props.messagePage.messageData} 
                    newMessageText={props.messagePage.newMessageText}
                    dispatch = {props.dispatch}/>
        </div>
    )
}

export default Message