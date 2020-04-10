import React from 'react'
import s from './Header.module.css'
import logo from './logo.png'
import {NavLink} from "react-router-dom";
import noPhoto from '../Main/Main_right/sections/Wall/Post/noPhoto.png'

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
                                ? <div> {login} <NavLink to="/login" onClick={logout}> Check out </NavLink></div>
                                : <div><NavLink to="/login"> Sigh Up </NavLink></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header