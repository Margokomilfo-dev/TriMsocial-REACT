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
import Loader from "../common/Loader/Loader";

class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = this.props.userId}
        this.props.setUserThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId)
    }
    render(){
        if (!this.props.isLogin) return <Loader/>
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
        status: state.mainPage.status,
        userId: state.auth.id,
        isLogin: state.auth.isLogin
});

export default compose(
    connect (mapStateToProps, {setUserProfile, setUserThunkCreator,
                            getUserStatusThunkCreator, updateUserStatusThunkCreator}),
    withRouter,
    withAuthRedirect
)(MainContainer)
