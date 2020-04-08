import React from 'react'
import s from './Users.module.css'
import NameUser from './NameUser/NameUser'

let Users = (props) => {
    let userItems = props.userData.map( u =>  <NameUser name = {u.name} id = {u.id}/>);
    
    return (
        <div className={s.users}>
            {userItems}
        </div>          
    )
}

export default Users