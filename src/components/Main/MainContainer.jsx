import React from 'react'
import * as axios from "axios";
import Main from "./Main";
import {connect} from "react-redux"
import {setUserProfile} from "../../redux/main_reducer";

class MainContainer extends React.Component {
    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/5`)
                .then(response => {
                    this.props.setUserProfile(response.data)
                })
    }

    render(){
        debugger
        return(
            <Main {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.mainPage.profile
});


export default connect (mapStateToProps, {setUserProfile})(MainContainer)