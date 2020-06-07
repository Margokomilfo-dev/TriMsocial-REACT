import React from 'react'
import {connect} from "react-redux"
import {
    followSuccess,
    toggleFollowingInProcess,
    setCurrentPage,
    unfollowSuccess, getUsersTC,
    unfollowTC,
    followTC
} from "../../../redux/users_reducer";
import AllUsers from "./AllUsers";
import Loader from "../../common/Loader/Loader";
import {compose} from "redux";
import {
    getCountPages,
    getCountUsersOnPage,
    getCurrentPage, getFollowingInProcess, getIsLoader, getIsLogin,
    getTotalUsersCount,
    getUsers
} from "../../../redux/selectors";

class AllUsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, countUsersOnPage} = this.props
        if (this.props.users.length === 0) {
            this.props.getUsersTC(currentPage, countUsersOnPage)
        }
    }
    onPageChanged = (pageNamber) => {
        let {countUsersOnPage} = this.props
         this.props.getUsersTC(pageNamber, countUsersOnPage)
     };
    render() {
        return <>
            {this.props.isLoader ? <Loader/> : null}

            <AllUsers countUsersOnPage={this.props.countUsersOnPage}
                      totalUsersCount={this.props.totalUsersCount}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      toggleFollowingInProcess={this.props.toggleFollowingInProcess}
                      followingInProcess={this.props.followingInProcess}
                      unfollowTC={this.props.unfollowTC}
                      followTC={this.props.followTC}
                      isLogin={this.props.isLogin}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        countUsersOnPage: getCountUsersOnPage(state),
        totalUsersCount: getTotalUsersCount(state),
        countPages: getCountPages(state),
        currentPage: getCurrentPage(state),
        isLoader: getIsLoader(state),
        followingInProcess: getFollowingInProcess(state),
        isLogin: getIsLogin(state)
    }
}

export default compose(
    connect(mapStateToProps,{followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingInProcess,
        getUsersTC, unfollowTC, followTC })
)(AllUsersContainer)
