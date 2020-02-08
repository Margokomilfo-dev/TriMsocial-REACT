import React from 'react'
import s from './Users.module.css'
import Name_user from './Name_user/Name_user'

let Users = (props) => {
    let userItems = props.userData.map( u =>  <Name_user name = {u.name} id = {u.id}/>);
    
    return (
        <div className={s.users}>
            {userItems}
        </div>          
    )
}

export default Users