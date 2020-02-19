import React from 'react'
import { onPostTextChangeActionCreator, addPostActionCreator } from '../../../../../redux/main_reducer'
import Wall from './Wall'
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        postData : state.mainPage.postData,
        newPostText : state.mainPage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostActionCreator())},
        postTextChange: (text) => {dispatch(onPostTextChangeActionCreator(text))}
    }
}

const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall)

export default WallContainer
