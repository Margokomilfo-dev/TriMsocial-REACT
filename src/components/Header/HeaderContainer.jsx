import React from 'react'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {authCheckOut, setAuthUserData, setUserURLPhoto} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id,login, email);
                    //------------------------
                    let userId = response.data.data.id;
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
                        .then(response => {
                            this.props.setUserURLPhoto(response.data.photos.small);
                        })
                }
            });
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

export default connect (mapStateToProps, {setAuthUserData, authCheckOut, setUserURLPhoto})(HeaderContainer)