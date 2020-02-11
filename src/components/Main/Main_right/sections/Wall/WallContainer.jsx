import React from 'react'
import { onPostTextChangeActionCreator, addPostActionCreator } from '../../../../../redux/main_reducer'
import Wall from './Wall'


let WallContainer = (props) => {

    //------------------------------------------------    
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let postTextChange = (text) => {
        props.dispatch(onPostTextChangeActionCreator(text));
    }
    //------------------------------------------------
    return (
        <Wall addPost={addPost} onPostTextChange={postTextChange} postData = {props.postData} />
    )
}

export default WallContainer
