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
import {UserDataType} from "../../../redux/types";
import {TrimStateType} from "../../../redux/store_redux";

type MapStateToPropsType = {
    users: Array<UserDataType>
    countUsersOnPage: number
    totalUsersCount: number
    countPages: number
    currentPage: number
    isLoader: boolean
    followingInProcess: Array<number>
    isLogin: boolean

}
type MapDispatchToPropsType = {
    toggleFollowingInProcess: (isLoader: boolean, userId: number) => void
    getUsersTC: (currentPage: number, countUsersOnPage: number) => void
    onPageChanged: (pageNumber: number) => void
    unfollowTC: (id: number) => void
    followTC: (id: number, name: string, photos: string) => void
    addFriendTC: () => void

}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class AllUsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        let {currentPage, countUsersOnPage} = this.props
        if (this.props.users.length === 0) {
            this.props.getUsersTC(currentPage, countUsersOnPage)
        }
    }
    onPageChanged = (pageNumber: number) => {
        let {countUsersOnPage} = this.props
         this.props.getUsersTC(pageNumber, countUsersOnPage)
     };
    render() {
        return <>
            {this.props.isLoader ? <Loader/> : null}

            <AllUsers countUsersOnPage={this.props.countUsersOnPage}
                      totalUsersCount={this.props.totalUsersCount}
                      users={this.props.users}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      followingInProcess={this.props.followingInProcess}
                      unfollowTC={this.props.unfollowTC}
                      followTC={this.props.followTC}
                      isLogin={this.props.isLogin}/>
        </>
    }
}

let mapStateToProps = (state: TrimStateType): MapStateToPropsType => {
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
    connect(mapStateToProps,{ setCurrentPage, toggleFollowingInProcess, getUsersTC, unfollowTC, followTC })
)(AllUsersContainer)
