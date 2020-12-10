import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getIsLogin} from "../../../redux/selectors";
import s from './Welcome.module.css'


class Welcome extends React.Component {
    render() {

        return (
            <div className={s.welcome}>

                <div className={s.header}>
                    <span className={s.startPage}>start page...</span><br/>
                    <span className={s.appName}>TriM<u>social</u></span> by Marharyta Pryshchapionak
                </div>
                <hr/>
                In this project I've had my experience with: <br/>
                <ul>
                    <li> React
                        <ul>
                            <li>create-react-app</li>
                            <li>applyMiddleware, combineReducers, createStore</li>
                            <li>React.lazy, React.suspense</li>
                            <li>function and class components (PureComponents, Components, memo)</li>
                            <li>Hooks (useState, useEffect)</li>
                            <li>react-router-dom (withRouter, BrowserRouter, Route, NavLink, Redirect)</li>
                        </ul>
                    </li>
                    <li> Redux
                        <ul>
                            <li>combineReducers, createStore, compose</li>
                            <li>react-redux (Provider, connect)</li>
                            <li>redux-thunk (thunkMiddleware)</li>
                            <li>redux-form (stopSubmit, reduxForm ...)</li>
                            <li>redux-ducks</li>
                        </ul>
                    </li>
                    <li>axios</li>
                    <li>work with <u>Promises</u> and <u>async await</u></li>
                    <li>selectors, reselect (createSelector)</li>
                    <li>understanding Virtual DOM</li>
                    <li>TDD - Unit Testing</li>
                    <li>pagination</li>
                    <li>chrome extensions</li>
                        <ul>
                            <li>react Developer</li>
                            <li>react DevTools</li>
                            <li>etc.</li>
                        </ul>
                    <li>ect.</li>
                </ul>

                This will be a lot of beautiful text =) In process... like a project... <br/>
                <span className={s.wishes}>HAVE A NICE DAY, MY FRIEND!</span>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        isLogin: getIsLogin(state)
    })
}

export default connect(mapStateToProps, {})(Welcome)

