import React from 'react'
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import {Input, validate} from "../../Validations";
import {login, setCapcha} from "../../../redux/auth_reducer";
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";

let LoginForm = (props) => {
    return (
        <div>
            <div className={s.check_in}>
                <form className={s.form} onSubmit={props.handleSubmit}>
                    <Field component={Input} name='email' placeholder='email'/>
                    <Field component={Input} name='password' placeholder='password' type='password'/>

                    <div className={s.checkbox}>
                        <Field component='input' type='checkbox'  name='rememberMe'/> remember me
                    </div>
                    {/*---------------common_error-------------------*/}
                    {props.error &&
                    <div className={s.commonError}>
                        {props.error}
                    </div>}
                    {/*---------------capcha-------------------------*/}
                    {!props.capcha &&
                    <div className={s.capcha}>
                        <img src={props.urlCapcha} alt=""/>
                        {/*<Field component={Input} name='capcha' placeholder='capcha' type='text'/>*/}
                    </div>}
                    <div className={s.go}>
                        <button type='button' disabled={props.pristine || props.submitting} onClick={props.reset}>Clear Values</button>
                        <button type='submit' className={s.loginButton}>Login</button>
                        <NavLink to='/'>Forgot the password</NavLink>
                    </div>


                </form>
            </div>
        </div>
    )
};

let RegisterForm = (props) => {
    return (
        <div className={s.register}>
            <div className={s.header}>
                <div className={s.header_top}>Впервые в 3Msocial? </div>
                <div className={s.header_bottom}>Моментальная регистрация </div>
            </div>
            <form className={s.form} onSubmit={props.handleSubmit}>
                <Field component={Input} type='text' name='registerEmail' placeholder='email'/>
                <Field component={Input} type='password' name='registerPassword1' placeholder='password' />
                <Field component={Input} type='password' name='registerPassword2' placeholder='password'/>
                <div className={s.go}>
                    <button type='submit' className={s.loginButton}>Login</button>
                    <button type='button' disabled={props.pristine || props.submitting} onClick={props.reset}>Clear Values</button>
                </div>
            </form>
        </div>
    )
}

let LoginReduxForm = reduxForm({form: 'loginForm', validate})(LoginForm)
let RegisterReduxForm = reduxForm({form: 'registerForm', validate})(RegisterForm)

let Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)

    };

    if(props.isLogin){
        return <Redirect to='/profile'/>
    }

    return (
        <div className = {s.login}>
            <LoginReduxForm onSubmit={onSubmit} urlCapcha={props.urlCapcha}/>
            <RegisterReduxForm onSubmit={onSubmit}/>

        </div>
    )
};

let mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
    capcha: state.auth.capcha,
    urlCapcha: state.auth.urlCapcha,

});
export default connect (mapStateToProps, {login, setCapcha})(Login)