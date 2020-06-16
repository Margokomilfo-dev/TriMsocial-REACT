import React from 'react'
import './TriM.js'
import  s from './TriM.module.css'
import Sitebar from './components/Sitebar/Sitebar.jsx'
import {Route, withRouter} from 'react-router-dom'
import Last_seen from './components/Last_seen/Last_seen.jsx'
import Photos from './components/Sitebar/Photos/Photos.jsx'
import Friends from './components/Sitebar/Friends/Friends.jsx'
import News from './components/Sitebar/News/News.jsx'
import Music from './components/Sitebar/Music/Music.jsx'
import Muvies from './components/Sitebar/Muvies/Muvies.jsx'
import Groups from './components/Sitebar/Groups/Groups.jsx'

import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

import {connect} from "react-redux";
import {compose} from "redux";
import {initializationTriM} from "./redux/trim_reducer";
import Loader from "./components/common/Loader/Loader";
import {getInitialed, getIsLogin} from "./redux/selectors";
import MainWelcome from "./components/Main/Welcome";

const Message = React.lazy(() => import('./components/Sitebar/Message/Message.jsx'));
// import Message from './components/Sitebar/Message/Message.jsx'
const AllUsersContainer = React.lazy(() => import('./components/Sitebar/AllUsers/AllUsersContainer'));
//import AllUsersContainer from "./components/Sitebar/AllUsers/AllUsersContainer";
const Login = React.lazy(() => import('./components/Header/Login/Login'));

//import Login from "./components/Header/Login/Login";

class TriM extends React.Component {
    componentDidMount() {
        this.props.initializationTriM();
    }

    render() {
        if (!this.props.initialed) {
            return <div className={s.loading}>loading...</div>
        }
        return (
            <>
                <div className='container'>
                    <HeaderContainer/>
                    <div className={s.wrapper}>
                        <Sitebar/>
                        <div className={s.main_wrapper}>
                            {this.props.isLogin ? (<Last_seen last_seen='Online...'/>) :
                                (<Last_seen last_seen={`You aren't autorized...`}/>)}

                            <React.Suspense fallback={<Loader/>}>
                                <Route path='/welcome' render={() => <MainWelcome />}/>
                                <Route path='/profile/:userId?/' render={() => <MainContainer store={this.props.store}
                                                                                              state={this.props.state}/>}/>

                                <Route path='/message' render={() =>
                                    <Message store={this.props.store}
                                             userData={this.props.state.messagePage.userData}/>}/>
                                <Route path='/users' render={() => <AllUsersContainer/>}/>
                                <Route path='/login' render={() => <Login/>}/>
                                <Route path='/photos' render={() => <Photos/>}/>
                                <Route path='/friends' render={() => <Friends/>}/>
                                <Route path='/news' render={() => <News/>}/>
                                <Route path='/music' render={() => <Music/>}/>
                                <Route path='/muvies' render={() => <Muvies/>}/>
                                <Route path='/groups' render={() => <Groups/>}/>
                            </React.Suspense>
                        </div>
                        {/* main_wrapper */}
                    </div>
                    {/* wrapper */}
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    isLogin: getIsLogin(state),
    initialed: getInitialed(state)
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializationTriM}))(TriM)
