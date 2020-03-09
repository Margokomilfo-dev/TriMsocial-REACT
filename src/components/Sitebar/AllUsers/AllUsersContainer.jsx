import React from 'react'
import {connect} from "react-redux"
import {follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsLoader, unfollow} from "../../../redux/users_reducer";
import * as axios from "axios";
import AllUsers from "./AllUsers";
import Loader from "../../common/Loader/Loader";

class AllUsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsLoader(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsersOnPage}`)
                .then(response => {
                    this.props.toggleIsLoader(false)
                    this.props.setUsers(response.data.items)
                    this.props.setUsersTotalCount(response.data.totalCount)
                })
        }
    }

    onPageChanged = (pageNamber) => {
        this.props.setCurrentPage(pageNamber);
        this.props.toggleIsLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.countUsersOnPage}`, {withCredentials: true})
            .then(response => {
                this.props.toggleIsLoader(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <>
            {this.props.isLoader ? <Loader/> : null}

            <AllUsers countUsersOnPage={this.props.countUsersOnPage}
                      totalUsersCount={this.props.totalUsersCount}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}/>
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
        isLoader: state.usersPage.isLoader
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userid) => {
//             dispatch(follow(userid))
//         }
//     }
// }

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsLoader })(AllUsersContainer)
