/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { addMessActionCreator, onMessTextChangeActionCreator } from '../../../../redux/message_reducer';
import Messages from "./Messages";
import User_messages from "./User_messages/User_messages";

let MessagesContainer = (props) => {

    let state = props.store.getState();

    let addMess = () => {
       props.store.dispatch(addMessActionCreator());
    }
    
    let onMessTextChange = (text) => {
        props.store.dispatch(onMessTextChangeActionCreator(text));
    }

    return (
        <Messages onMessTextChange={onMessTextChange} addMess={addMess} messageData={state.messagePage.messageData} newMessageText={state.messagePage.newMessageText} />
    )
}

export default MessagesContainer


