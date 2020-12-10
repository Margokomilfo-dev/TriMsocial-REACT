import React from 'react'
import s from './NameUser.module.css'
import { NavLink } from 'react-router-dom'

let NameUser = (props) => {
    return (
        <div className={s.name_user}>
           <NavLink to={'/message/'+ props.id} activeClassName = {s.activeLink}>{props.name}</NavLink> 
        </div>
    )
}

export default NameUser