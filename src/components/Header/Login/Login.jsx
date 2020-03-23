import React from 'react'
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'

let LoginForm = (props) => {
    return (
        <div>
            <div className={s.check_in}>
                <form className={s.form} onSubmit={props.handleSubmit}>
                    <Field component={'input'} name={'login'} placeholder={'login'}/>
                    <Field component={'input'} name={'password'} placeholder={'password'}/>
                    <div className={s.checkbox}>
                        <Field component={'input'} type={'checkbox'}  name={'rememberMe'}/> remember me
                    </div>
                    <div className={s.go}>
                        <button>Login</button>
                        <a href="">Forgot the password</a>
                    </div>

                </form>
            </div>
            {/*second form*/}
            <div className={s.register}>
                <div className={s.header}>
                    <div className={s.header_top}>Впервые в 3Msocial? </div>
                    <div className={s.header_bottom}>Моментальная регистрация </div>
                </div>
                <form className={s.form}>
                    <input type="text" placeholder='login'/>
                    <input type="text" placeholder='password'/>
                    <input type="text" placeholder='password'/>
                    <button>Go in</button>
                </form>
            </div>

        </div>
    )
};

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let Login = (props) => {
    let onSubmit = (formData) => {console.log(formData)};

    return (
        <div className = {s.login}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};
export default Login