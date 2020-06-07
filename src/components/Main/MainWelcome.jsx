import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getIsLogin} from "../../redux/selectors";


class MainWelcome extends React.Component {
    render() {

        return (
            <div>
              Have a nice day!
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        isLogin: getIsLogin(state)
    })
}

export default connect(mapStateToProps, {})(MainWelcome)

