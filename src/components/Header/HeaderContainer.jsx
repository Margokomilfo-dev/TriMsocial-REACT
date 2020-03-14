import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {
    authCheckOut,
    setAuthAndUserURLPhotoThunkCreator,
} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthAndUserURLPhotoThunkCreator();
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

let mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
    login: state.auth.login,
    id: state.auth.id,
    userPhoto: state.auth.userPhoto
});

export default connect (mapStateToProps, { authCheckOut, setAuthAndUserURLPhotoThunkCreator})(HeaderContainer)