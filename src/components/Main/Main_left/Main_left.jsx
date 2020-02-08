import React from 'react'
import s from './Main_left.module.css'
import Ava from './sections/Ava/Ava.jsx'
import FriendsSec from './sections/FriendsSec/FriendsSec'


let Main_left = (props) => {
    return (
        <div className={s.main_left}>

            <div className={s.section}>
                <Ava />
            </div> {/*section*/}

            <div className={s.section}>
                <FriendsSec data={props}/>
            </div> {/*section*/}  
            
        </div>
    )
}

export default Main_left