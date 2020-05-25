import React  from 'react'
import FriendsSec from "./FriendsSec";
import {connect} from "react-redux";
import {getFriendData} from "../../../../../redux/selectors";



class FriendsSecContainer extends React.Component {
    render() {
        return (
            <FriendsSec {...this.props} friendData = {this.props.friendData}/>
        )
    }
}

let mapStateToProps = (state) => ({
    friendData:  state.usersPage.friendData
});

export default connect (mapStateToProps, {})(FriendsSecContainer)