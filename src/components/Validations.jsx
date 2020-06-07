import React from 'react'
import s from './Validations.module.css'


export let validate = (values) => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else
        if (values.email.length < 5 || values.email.length > 30) {
        errors.email = 'Must be 5-30 characters or less'
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 4 || values.password.length > 15) {
        errors.password = 'Must be 4-15 characters'
    }

    if (!values.registerLogin) {
        errors.registerLogin = 'Required'
    } else if (values.registerLogin.length < 5 || values.registerLogin.length > 20) {
        errors.registerLogin = 'Must be 5-20 characters'
    }

    if (!values.registerPassword1) {
        errors.registerPassword1 = 'Required'
    } else if (values.registerPassword1.length < 4 || values.registerPassword1.length > 15) {
        errors.registerPassword1 = 'Must be 4-15 characters'
    }

    if (!values.registerPassword2) {
        errors.registerPassword2 = 'Required'
    } else if (values.registerPassword2.length < 4 || values.registerPassword2.length > 15) {
        errors.registerPassword2 = 'Must be 4-15 characters'
    }

   // !!values.registerPassword1 && !!values.registerPassword2 && (values.registerPassword1 !== values.registerPassword2) &&(values.registerPassword1.length > 5 && values.registerPassword1.length < 15 ) && (values.registerPassword2.length > 5 && values.registerPassword2.length < 15 ))
    if (values.registerPassword1 !== values.registerPassword2) {
        errors.registerPassword1 = 'not the same'
        errors.registerPassword2 = 'not the same'
    } else if(!values.registerPassword1) {
        errors.registerPassword1 = 'Required'
    } else if(values.registerPassword1.length < 4 || values.registerPassword1.length > 15 ) {
        errors.registerPassword1 = 'Must be 4-15 characters'
    } else if(values.registerPassword2.length < 4 || values.registerPassword2.length > 15 ) {
    errors.registerPassword2 = 'Must be 4-15 characters'
    }  else if(!values.registerPassword2){
        errors.registerPassword2 = 'Required'
    } else {
        errors.registerPassword2 = 'Yeee! The passwords are the same!!'
    }

    return errors
}

export const Input = ({input, placeholder,  type, meta: {touched, error}}) => {
    return (
        <div>
            <input {...input} placeholder={placeholder} type={type}/>
            {touched && (error &&
                (<div className={s.wrap} >
                    <div className={s.errorText}>{error}</div>
                </div>)
                )}
        </div>
    )
}