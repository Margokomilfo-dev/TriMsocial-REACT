import React from 'react'
import {connect} from "react-redux"
import {
    follow,
    toggleFollowingInProcess,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsLoader,
    unfollow
} from "../../../redux/users_reducer";
import * as axios from "axios";
import AllUsers from "./AllUsers";
import Loader from "../../common/Loader/Loader";
import {allUsersAPI} from "../../../api/api";

class AllUsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsLoader(true)

            allUsersAPI.getAllUsers(this.props.currentPage, this.props.countUsersOnPage).then(response => {
                this.props.toggleIsLoader(false)
                this.props.setUsers(response.items)
                this.props.setUsersTotalCount(response.totalCount)
            })
        }
    }
    onPageChanged = (pageNamber) => {
        this.props.setCurrentPage(pageNamber);
        this.props.toggleIsLoader(true);

        allUsersAPI.getAllUsers(pageNamber, this.props.countUsersOnPage).then(response => {
                this.props.toggleIsLoader(false)
                this.props.setUsers(response.items)
            })
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
                      followingInProcess={this.props.followingInProcess}/>
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
        followingInProcess: state.usersPage.followingInProcess
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsLoader, toggleFollowingInProcess })(AllUsersContainer)
