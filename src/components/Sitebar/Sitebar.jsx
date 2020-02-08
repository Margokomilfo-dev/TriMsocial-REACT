import React from 'react'
import s from './Sitebar.module.css'
import profile from './../../icons/profile.png'
import friends from './../../icons/friends.png'
import message from './../../icons/message.png'
import photos from './../../icons/photos.png'
import news from './../../icons/news.png'
import music  from './../../icons/music.png'
import muvie from './../../icons/muvie.png'
import group from './../../icons/group.png'
import { NavLink } from 'react-router-dom'

let Sitebar = () => {
    return (
        <div className = {s.sitebar}>
            <div className = {s.items}>
                <div className = {s.item}>
                    <img src={profile} alt={"profile"}/>
                    <NavLink to='/profile' activeClassName = {s.activeLink}>Profile</NavLink>
                </div>
                <div className = {s.item}>
                    <img src={message} alt={"message"}/>
                    <NavLink to='/message' activeClassName = {s.activeLink}>Message</NavLink>
                </div>
                <div className = {s.item}>
                    <img src={photos} alt={"photos"}/>
                    <NavLink to='/photos' activeClassName = {s.activeLink}>Photos</NavLink>
                </div>
                <div className = {s.item}>
                    <img src={friends} alt={"friends"}/>
                    <NavLink to='/friends' activeClassName = {s.activeLink}>Friends</NavLink>
                </div>
                <div className = {s.item}>
                    <img src={news} alt={"news"}/>
                    <NavLink to='/news' activeClassName = {s.activeLink}>News</NavLink>
                </div> 
                <div className = {s.item}>
                    <img src={music} alt={"music"}/>
                    <NavLink to='/music' activeClassName = {s.activeLink}>Music</NavLink>
                </div> 
                <div className = {s.item}>
                    <img src={muvie} alt={"muvies"}/>
                    <NavLink to='/muvies' activeClassName = {s.activeLink}>Muvies</NavLink>
                </div> 
                <div className = {s.item}>
                    <img src={group} alt={"group"}/>
                    <NavLink to='/groups' activeClassName = {s.activeLink}>Groups</NavLink>
                </div> 
            </div>  
        </div>
    )
}

export default Sitebar

