import React from 'react'
import s from './Header.module.css'
import logo from './logo.png'

let Header = () => {
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
                        <a href='#'>Sigh Up</a>
                        <a href='#'>Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header