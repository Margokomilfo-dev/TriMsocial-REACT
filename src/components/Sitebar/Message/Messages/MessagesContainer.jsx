/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { addMessActionCreator, onMessTextChangeActionCreator } from '../../../../redux/message_reducer';
import Messages from "./Messages";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        messageData: state.messagePage.messageData,
        newMessageText: state.messagePage.newMessageText,
        isLogin: state.auth.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMess: () => {
            dispatch(addMessActionCreator());
        },
        onMessTextChange: (text) => {
            dispatch(onMessTextChangeActionCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default MessagesContainer


