import React from 'react'
import Main from "./Main";
import {connect} from "react-redux"
import {setUserProfile, setUserThunkCreator} from "../../redux/main_reducer";
import {withRouter} from "react-router-dom";

class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 2}
        this.props.setUserThunkCreator(userId)
    }

    render(){
        return(
            <Main {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.mainPage.profile,
        isLogin: state.auth.isLogin
});

let WithURLDataMainContainer = withRouter(MainContainer);

export default connect (mapStateToProps, {setUserProfile, setUserThunkCreator})(WithURLDataMainContainer)