/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import s from './Messages.module.css'
import User_messages from './User_messages/User_messages'
import { addMessActionCreator, onMessTextChangeActionCreator } from '../../../../redux/message_reducer';
import {Redirect} from "react-router-dom";

let Messages = (props) => {

    let messageItems = props.messageData.map(m => <User_messages message={m.message} key={m.id}/>)
    let textMessPoint = React.createRef();
    let addMess = () => {
        textMessPoint.current.value === '' ? alert('Empty field! Try to write down again!') :  props.addMess();
    }
    
    let onMessTextChange = (text) => {
        let newMessageText = textMessPoint.current.value;
        props.onMessTextChange(newMessageText);
    }

    return (
        <div className={s.messages_wrapper}>
            <div className={s.messages}>
                {messageItems}
                
            </div>
            <div className={s.new_text}>
                <textarea onChange={onMessTextChange} name="for_message" rows="5" cols="65" placeholder="Your text..."  
                            ref = {textMessPoint} value={props.newMessageText}/>
                <button onClick={addMess}>Send</button>
            </div>
        </div>

    )
}

export default Messages