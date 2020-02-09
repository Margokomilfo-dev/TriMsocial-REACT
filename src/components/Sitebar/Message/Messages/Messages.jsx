/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import s from './Messages.module.css'
import User_messages from './User_messages/User_messages'
import { addMessActionCreator, onMessTextChangeActionCreator } from '../../../../redux/message_reducer';

let Messages = (props) => {
    let textMessPoint = React.createRef();

    let addMess = () => {
        textMessPoint.current.value === '' ? alert('Empty field! Try to write down again!') :  props.dispatch(addMessActionCreator());
    }
    
    let onMessTextChange = (text) => {
        let newMessageText = textMessPoint.current.value;
        props.dispatch(onMessTextChangeActionCreator(newMessageText));
    }
    
    let messageItems = props.messageData.map(m => <User_messages message={m.message} />)
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