import React from 'react'
import Main from "./Main";
import {connect} from "react-redux"
import {setUserProfile, setUserThunkCreator} from "../../redux/main_reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../redux/HOC";
import {compose} from "redux";

class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 2}
        this.props.setUserThunkCreator(userId)
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

export default compose(
    connect (mapStateToProps, {setUserProfile, setUserThunkCreator}),
    withRouter,
    withAuthRedirect
)(MainContainer)
