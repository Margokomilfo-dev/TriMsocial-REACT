import React from 'react'
import s from './Login.module.css'
import {Input, validate} from "../../Validations";
import {login, setCaptcha} from "../../../redux/auth_reducer";
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {createField} from "../../../object_helpers/object_helpers";
import {initializationTriM} from "../../../redux/trim_reducer";
import {reduxForm} from "redux-form";

let LoginForm = ({handleSubmit, error, captcha, urlCaptcha, pristine, submitting, reset}) => {
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
                    {/*---------------captcha-------------------------*/}
                    {captcha && <div className={s.captcha}><img src={urlCaptcha} alt=""/></div>}
                    {captcha && <div>{createField(null, Input, 'text', 'captcha', 'captcha', null)}</div>}

                    <div className={s.go}>
                        <button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                        <button type='submit' className={s.loginButton}>Login</button>
                        <NavLink to='/'>Forgot the password</NavLink>
                    </div>
                    <div>
                        <u>data of test account:</u><br/>
                        <b>Email:</b> margokomilfo@mail.ru<br/>
                        <b>Password:</b> 123456789
                    </div>

                </form>
            </div>
        </div>
    )
};

// let RegisterForm = ({handleSubmit,pristine,submitting,reset }) => {
//     return (
//         <div className={s.register}>
//             <div className={s.header}>
//                 <div className={s.header_top}>Впервые в 3Msocial? </div>
//                 <div className={s.header_bottom}>Моментальная регистрация </div>
//                 <div>DOESN'T WORK!!!</div>
//             </div>
//             <form className={s.form} onSubmit={handleSubmit}>
//                 {createField(null, Input, 'text', 'registerEmail', "email", null)}
//                 {createField(null, Input, 'password', 'registerPassword1', 'password', null )}
//                 {createField(null, Input, 'password', 'registerPassword2', 'password', null )}
//                 <div className={s.go}>
//                     <button type='submit' className={s.loginButton}>Login</button>
//                     <button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

let LoginReduxForm = reduxForm({form: 'loginForm', validate})(LoginForm)
// let RegisterReduxForm = reduxForm({form: 'registerForm', validate})(RegisterForm)

class Login extends React.Component{

    componentDidMount() {
        //this.props.initializationTriM();
    }

    onSubmit = (formData) => {
        debugger
        this.props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isLogin !== prevProps.isLogin) {
        this.props.initializationTriM()
        }
    }

    render() {
        if (this.props.isLogin) {
            return <Redirect to={'/welcome'}/>
        }
        return (

            <div className = {s.login}>
                <LoginReduxForm onSubmit={this.onSubmit} urlCaptcha={this.props.urlCaptcha} captcha={this.props.captcha} />
                {/*<RegisterReduxForm onSubmit={this.onSubmit}/>*/}

            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
    captcha: state.auth.captcha,
    urlCaptcha: state.auth.urlCaptcha


});
export default connect (mapStateToProps, {login, setCaptcha, initializationTriM})(Login)
