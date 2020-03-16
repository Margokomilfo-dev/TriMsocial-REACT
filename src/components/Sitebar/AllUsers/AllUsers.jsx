import React from 'react'
import s from './AllUsers.module.css'
import photo from './pic/nophoto.png'
import {NavLink} from "react-router-dom";

const AllUsers = (props) => {
    debugger
    let pages = [],
        countPages = Math.ceil(props.totalUsersCount / props.countUsersOnPage);

    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }
    return (
        <div>
            {props.users.map(u =>
                <div className={s.user_container} key={u.id}>

                    <div className={s.left}>
                        <div className={s.photo}>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : photo} alt="logo"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProcess.some(id => id === u.id)} className={`${s.unfollow} ${s.button}`} onClick={() => {
                                    props.unfollowThunkCreator(u.id)
                                }}>Unfollow</button>
                                : <button  disabled={props.followingInProcess.some(id => id === u.id)} className={`${s.follow} ${s.button}`} onClick={() => {
                                    props.followThunkCreator(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>

                    <div className={s.right}>
                        <div className={s.dataUser}>
                            <div className={s.fullname}>{u.name} <span>(@{"u.nickname"})</span></div>
                            <div className={s.status}>{u.status}</div>
                        </div>
                        <div className={s.location}>
                            <span className={s.cityName}>{"u.localisation.cityname"}</span>/<span
                            className={s.country}>{"u.localisation.country"}</span>

                        </div>
                    </div>
                </div>)}
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p && s.selectedPage} key={p.id}
                                     onClick = {() => {props.onPageChanged(p)}}> {p} </span>
                    })
                }
            </div>
        </div>
    )
};


export default AllUsers