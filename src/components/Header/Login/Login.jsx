import React from 'react'
import s from './Login.module.css'
import { reduxForm } from 'redux-form'
import {Input, validate} from "../../Validations";
import {login, setCapcha} from "../../../redux/auth_reducer";
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {createField} from "../../../object_helpers/object_helpers";
import {initializationTriM} from "../../../redux/trim_reducer";

let LoginForm = ({handleSubmit, error, capcha, urlCapcha, pristine, submitting, reset}) => {
    return (
        <div>
            <div className={s.check_in}>
                <form className={s.form} onSubmit={handleSubmit}>
                    {createField(null, Input, 'email', 'email', 'email', null )}
                    {createField(null, Input, 'password', 'password', 'password', null )}
                    {createField(s.checkbox, Input, 'checkbox', 'rememberMe', null, 'remember me ')}
                    {/*---------------common_error-------------------*/}
                    {error &&
                    <div className={s.commonError}>
                        {error}
                    </div>}
                    {/*---------------capcha-------------------------*/}
                    {!capcha &&
                    <div className={s.capcha}>
                        <img src={urlCapcha} alt=""/>
                        {/*{createField(null, Input, 'text', 'capcha', 'capcha', null )}*/}
                        {/*<Field component={Input} name='capcha' placeholder='capcha' type='text'/>*/}
                    </div>}
                    <div className={s.go}>
                        <button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                        <button type='submit' className={s.loginButton}>Login</button>
                        <NavLink to='/'>Forgot the password</NavLink>
                    </div>
                    данные тестового аккаунта:
                    Email: free@samuraijs.com
                    Password: free
                </form>
            </div>
        </div>
    )
};

let RegisterForm = ({handleSubmit,pristine,submitting,reset }) => {
    return (
        <div className={s.register}>
            <div className={s.header}>
                <div className={s.header_top}>Впервые в 3Msocial? </div>
                <div className={s.header_bottom}>Моментальная регистрация </div>
            </div>
            <form className={s.form} onSubmit={handleSubmit}>
                {createField(null, Input, 'text', 'registerEmail', "email", null)}
                {createField(null, Input, 'password', 'registerPassword1', 'password', null )}
                {createField(null, Input, 'password', 'registerPassword2', 'password', null )}
                <div className={s.go}>
                    <button type='submit' className={s.loginButton}>Login</button>
                    <button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        </div>
    )
}

let LoginReduxForm = reduxForm({form: 'loginForm', validate})(LoginForm)
let RegisterReduxForm = reduxForm({form: 'registerForm', validate})(RegisterForm)

class Login extends React.Component{

    componentDidMount() {
        //this.props.initializationTriM();
    }

    onSubmit = (formData) => {
        this.props.login(formData.email, formData.password, formData.rememberMe)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isLogin !== prevProps.isLogin) {
        this.props.initializationTriM()
        }
    }

    render() {
        if (this.props.isLogin) {
            return <Redirect to={'/profile'}/>
        }
        return (

            <div className = {s.login}>
                <LoginReduxForm onSubmit={this.onSubmit} urlCapcha={this.props.urlCapcha}/>
                <RegisterReduxForm onSubmit={this.onSubmit}/>

            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
    capcha: state.auth.capcha,
    urlCapcha: state.auth.urlCapcha,

});
export default connect (mapStateToProps, {login, setCapcha, initializationTriM})(Login)
