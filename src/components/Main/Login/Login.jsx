import React from 'react'
import s from './Login.module.css'

let Login = (props) => {
    return (
        <div className = {s.login}>
            <div className={s.check_in}>
                <div className={s.form}>
                    <input type="text" placeholder='login'/>
                    <input type="text" placeholder='password'/>
                    <div className={s.go}>
                        <button>Go in</button>
                        <a href="">Forgot the password</a>
                    </div>

                </div>
            </div>
            <div className={s.register}>
                <div className={s.header}>
                    <div className={s.header_top}>Впервые в 3Msocial? </div>
                    <div className={s.header_bottom}>Моментальная регистрация </div>
                </div>
                <div className={s.form}>
                    <input type="text" placeholder='login'/>
                    <input type="text" placeholder='password'/>
                    <input type="text" placeholder='password'/>
                    <button>Go in</button>
                </div>
            </div>
        </div>
    )
};
export default Login