import React from 'react'
import {addPost} from '../../../../../redux/main_reducer'
import Wall from './Wall'
import {connect} from "react-redux";

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
        newPostText : state.mainPage.newPostText,
        data: state.mainPage.postData.data
    }
}

export default connect(mapStateToProps, {addPost})(WallContainer)

