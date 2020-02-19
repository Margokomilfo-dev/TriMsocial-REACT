import React  from 'react'
import s from './FriendsSec.module.css'
import Friend from './Friend/Friend'

let FriendsSec = (props) => {
      let friendsData = props.state.friendData.map(f => <Friend src={f.src} alt={f.alt} name={f.name} />)

     return (
          <div className={s.friendsSec}>
               <div className={s.header}>
                    My Friends:
           </div>
               <div className={s.friends_wrapper}>
                   {friendsData}
               </div>
          </div>
     )
}

export default FriendsSec