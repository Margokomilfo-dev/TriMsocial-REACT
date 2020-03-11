import React from 'react'
import * as axios from "axios";
import Main from "./Main";
import {connect} from "react-redux"
import {setUserProfile} from "../../redux/main_reducer";
import {withRouter} from "react-router-dom";
import {mainAPI} from "../../api/api";

class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 2}
            mainAPI.getUserProfile(userId)
                .then(response => {
                    this.props.setUserProfile(response.data)
                })
    }

    render(){
        return(
            <Main {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.mainPage.profile
});

let WithURLDataMainContainer = withRouter(MainContainer)

export default connect (mapStateToProps, {setUserProfile})(WithURLDataMainContainer)