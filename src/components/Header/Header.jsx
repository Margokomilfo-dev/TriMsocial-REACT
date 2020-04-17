import React from 'react'
import s from './Header.module.css'
import logo from './logo.png'
import {NavLink, Redirect} from "react-router-dom";
import noPhoto from '../Main/Main_right/sections/Wall/Post/noPhoto.png'
import Loader from "../common/Loader/Loader";

let Header = ({userPhoto, isLogin, login, logout}) => {
    return (
        <div className={s.header}>
            <div className={s.header_wrapper}>
                <div className={s.logo}>
                    <img src={logo} alt={"logo"}/><span className={s.logo_title}>&nbsp;social</span>
                </div>
                <div className={s.main}>
                    <div className={s.search}>
                        <input type="text" name="fname" placeholder='search...'/>
                    </div>
                    <div className={s.signup}>
                        <div className={s.userPhoto}>
                            {userPhoto
                                ? <img src={userPhoto} alt=""/>
                                : <img className={s.noPhoto} src={noPhoto} alt=""/>}
                        </div>
                        <div className={s.signup_register}>
                            {isLogin
                                ? <div> {login} <NavLink to="/login" onClick={logout}> <button className={s.button}> Check out </button> </NavLink></div>
                                : <div><NavLink to="/login"><button className={s.button}> Sigh Up </button> </NavLink></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header