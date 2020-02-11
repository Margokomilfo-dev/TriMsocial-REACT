import React from 'react'
import { onPostTextChangeActionCreator, addPostActionCreator } from '../../../../../redux/main_reducer'
import Wall from './Wall'


let WallContainer = (props) => {
    let state = props.store.getState() ;
    //------------------------------------------------    
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let postTextChange = (text) => {
        props.store.dispatch(onPostTextChangeActionCreator(text));
    }
    //------------------------------------------------
    return (
        <Wall addPost={addPost} onPostTextChange={postTextChange} postData = {state.mainPage.postData} />
    )
}

export default WallContainer
