import React from 'react'
import { postTextChange, addPost } from '../../../../../redux/main_reducer'
import Wall from './Wall'
import {connect} from "react-redux";
import Main from "../../../Main";

class WallContainer extends React.Component {
    render(){
        return(
            <Wall {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postData : state.mainPage.postData,
        newPostText : state.mainPage.newPostText
    }
}

export default connect(mapStateToProps, {addPost, postTextChange})(WallContainer)

