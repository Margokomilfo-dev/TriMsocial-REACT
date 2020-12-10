import React from 'react'
import Main from "./Main";
import {connect} from "react-redux"
import {
    getUserStatus,
    setUserProfile,
    setUser,
    updateUserStatus, savePhoto, saveNewData
} from "../../redux/main_reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../redux/HOC";
import {compose} from "redux";
import Loader from "../common/Loader/Loader";
import {getId, getIsLogin, getProfile, getStatus} from "../../redux/selectors";
import {initializationTriM} from "../../redux/trim_reducer";

class MainContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = this.props.userId
            if (!userId) {
                withAuthRedirect()
            }}
        this.props.setUser(userId);
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
       this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }
    render(){
        if (!this.props.isLogin) return <Loader/>
        return(
            <Main {...this.props}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateUserStatus={this.props.updateUserStatus}
                  isOwner = {!this.props.match.params.userId}
                  userId = {this.props.userId}
                  savePhoto = {this.props.savePhoto}
                  initializationTriM = {this.props.initializationTriM}
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
                            getUserStatus, updateUserStatus, savePhoto, saveNewData, initializationTriM}),
    withRouter,
    withAuthRedirect
)(MainContainer)
