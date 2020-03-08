import React from 'react'
import s from './Header.module.css'
import logo from './logo.png'
import {NavLink} from "react-router-dom";
import noPhoto from '../Main/Main_right/sections/Wall/Post/noPhoto.png'

let Header = (props) => {
    return (
        <div className = {s.header}>
            <div className = {s.header_wrapper}>
                <div className = {s.logo}>
                    <img src={logo} alt={"logo"}/><span className = {s.logo_title}>&nbsp;social</span>
                </div>
                <div className = {s.main}>
                    <div className = {s.search}>
                        <input type="text" name="fname" placeholder='searcs...'/>
                    </div>


                        <div className = {s.signup}>
                            <div className={s.userPhoto}>
                                        { props.userPhoto
                                            ? <img src={props.userPhoto} alt=""/>
                                            : <img className={s.noPhoto} src= {noPhoto} alt=""/>}
                            </div>
                            <div className={s.signup_register}>
                                {props.isLogin
                                        ? <div> {props.login }<a href='#' onClick={props.authCheckOut}> Check out </a> </div>
                                        : <div><NavLink  to="/profile"> Sigh Up </NavLink> <a href='#'>Register</a></div>
                                }
                            </div>



                        </div>


                </div>
            </div>
        </div>
    )
}
export default Header