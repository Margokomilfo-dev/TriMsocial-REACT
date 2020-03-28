/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import s from './Messages.module.css'
import User_messages from './User_messages/User_messages'
import {Field, reduxForm} from "redux-form";

function AddMessageForm(props) {
    return (
        <form className={s.new_text} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name="for_message" rows="5" cols="65" placeholder="Your text..."/>
            <button>Send</button>
        </form>
    )
}
let AddMessageReduxForm = reduxForm({form: 'addMessageForm'})(AddMessageForm)

let Messages = (props) => {
    let messageItems = props.messageData.map(m => <User_messages message={m.message} key={m.id}/>)
    let addNewMess = (value) => {
        props.addMess(value.for_message)
        //textMessPoint.current.value === '' ? alert('Empty field! Try to write down again!') :  props.addMess();
    }
    return (
        <div className={s.messages_wrapper}>
            <div className={s.messages}>
                {messageItems}
            </div>
            <AddMessageReduxForm onSubmit={addNewMess}/>
        </div>

    )
}

export default Messages