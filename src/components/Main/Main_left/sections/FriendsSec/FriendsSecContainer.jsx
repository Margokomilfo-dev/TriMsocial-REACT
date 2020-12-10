import React from 'react'
import FriendsSec from "./FriendsSec";
import {connect} from "react-redux";
import {getCountPages, getCountUsersOnPage, getCurrentPage, getTotalUsersCount} from "../../../../../redux/selectors";
import * as axios from 'axios'
import {getUsersTC, setFriendsData} from "../../../../../redux/users_reducer";


class FriendsSecContainer extends React.Component {
    componentDidMount() {
        for (let p=0; p<3; p++) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.countUsersOnPage}`, {withCredentials: true}).then(
                response => {
                    response.data.items.filter(u => {
                        if (u.followed === true) {
                            this.props.setFriendsData(u.name, u.photos.small)
                        }
                    })
                })
        }
    }

    render() {
        return (
            <FriendsSec {...this.props} friendData={this.props.friendData}/>
        )
    }
}

let mapStateToProps = (state) => ({
    friendData: state.usersPage.friendData,
    countUsersOnPage: getCountUsersOnPage(state),
    totalUsersCount: getTotalUsersCount(state),
    countPages: getCountPages(state),
    currentPage: getCurrentPage(state)
});

export default connect(mapStateToProps, {setFriendsData, getUsersTC})(FriendsSecContainer)