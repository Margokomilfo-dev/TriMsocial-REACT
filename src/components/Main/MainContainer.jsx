import React from 'react'
import Main from "./Main";
import {connect} from "react-redux"
import {
    getUserStatusThunkCreator,
    setUserProfile,
    setUserThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/main_reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../redux/HOC";
import {compose} from "redux";

class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 6314}
        this.props.setUserThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId)
    }
    render(){
        return(
            <Main {...this.props}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator}
            />
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.mainPage.profile,
        status: state.mainPage.status
});

export default compose(
    connect (mapStateToProps, {setUserProfile, setUserThunkCreator,
                            getUserStatusThunkCreator, updateUserStatusThunkCreator}),
    withRouter,
    withAuthRedirect
)(MainContainer)
