import React from 'react'
import s from './Name_user.module.css'
import { NavLink } from 'react-router-dom'

let Name_user = (props) => {
    return (
        <div className={s.name_user}>
           <NavLink to={'/message/'+ props.id} activeClassName = {s.activeLink}>{props.name}</NavLink> 
        </div>
    )
}

export default Name_user