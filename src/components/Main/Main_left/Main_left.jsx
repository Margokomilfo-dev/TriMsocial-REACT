import React from 'react'
import s from './Main_left.module.css'
import Ava from './sections/Ava/Ava.jsx'
import FriendsSec from './sections/FriendsSec/FriendsSec'


let Main_left = (props) => {
    return (
        <div className={s.main_left}>

            <div className={s.section}>
                <Ava profile={props.profile}
                     isOwner={props.isOwner}
                     savePhoto = {props.savePhoto}/>
            </div> {/*section*/}

            <div className={s.section}>
                <FriendsSec state={props}/>
            </div> {/*section*/}  
            
        </div>
    )
}

export default Main_left