import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {
    logout
} from "../../redux/auth_reducer";
import {getId, getIsLogin, getLogin, getUserPhoto} from "../../redux/selectors";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

let mapStateToProps = (state) => ({
    isLogin:  getIsLogin(state),
    login: getLogin(state),
    id:  getId(state),
    userPhoto:  getUserPhoto(state)
});

export default connect (mapStateToProps, {logout})(HeaderContainer)