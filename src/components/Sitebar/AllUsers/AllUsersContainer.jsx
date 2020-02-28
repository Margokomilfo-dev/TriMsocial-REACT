import React from 'react'
import {connect} from "react-redux"
import AllUsers from "./AllUsersC"
import {followAC, setUsersAC, unfollowAC} from "../../../redux/users_reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid))
        },
        unfollow: (userid) => {
            dispatch(unfollowAC(userid))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)
