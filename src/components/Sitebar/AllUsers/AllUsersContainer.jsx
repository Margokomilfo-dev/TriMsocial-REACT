import React from 'react'
import {connect} from "react-redux"
import {
    follow,
    toggleFollowingInProcess,
    setCurrentPage,
    unfollow, getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator
} from "../../../redux/users_reducer";
import AllUsers from "./AllUsers";
import Loader from "../../common/Loader/Loader";

class AllUsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunkCreator(this.props.currentPage, this.props.countUsersOnPage)
        }
    }

     onPageChanged = (pageNamber) => {
         this.props.getUsersThunkCreator(pageNamber, this.props.countUsersOnPage)
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
                      unfollowThunkCreator={this.props.unfollowThunkCreator}
                      followThunkCreator={this.props.followThunkCreator}
                      isLogin={this.props.isLogin}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countUsersOnPage: state.usersPage.countUsersOnPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        countPages: state.usersPage.countPages,
        currentPage: state.usersPage.currentPage,
        isLoader: state.usersPage.isLoader,
        followingInProcess: state.usersPage.followingInProcess,
        isLogin: state.auth.isLogin
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage,
       toggleFollowingInProcess,
        getUsersThunkCreator, unfollowThunkCreator, followThunkCreator })(AllUsersContainer)
