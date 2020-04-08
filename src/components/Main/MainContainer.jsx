import React from 'react'
import Main from "./Main";
import {connect} from "react-redux"
import {
    getUserStatus,
    setUserProfile,
    setUser,
    updateUserStatus
} from "../../redux/main_reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../redux/HOC";
import {compose} from "redux";
import Loader from "../common/Loader/Loader";
import {getId, getIsLogin, getProfile, getStatus} from "../../redux/selectors";

class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = this.props.userId
            if (!userId) {
                withAuthRedirect()
            }}
        this.props.setUser(userId);
        this.props.getUserStatus(userId)
    }
    render(){
        if (!this.props.isLogin) return <Loader/>
        return(
            <Main {...this.props}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

let mapStateToProps = (state) => ({
        profile: getProfile(state),
        status: getStatus(state),
        userId: getId(state),
        isLogin: getIsLogin(state)
});

export default compose(
    connect (mapStateToProps, {setUserProfile, setUser,
                            getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(MainContainer)
