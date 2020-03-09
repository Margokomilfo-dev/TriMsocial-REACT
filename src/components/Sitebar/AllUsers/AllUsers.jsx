import React from 'react'
import s from './AllUsers.module.css'
import photo from './pic/nophoto.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const AllUsers = (props) => {
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
                                ? <button className={`${s.unfollow} ${s.button}`} onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {
                                            "API-KEY" : "40ffb3ac-7a26-461e-9d58-b5b7054c7f94"}}
                                    )
                                        .then(response => {
                                            if (response.data.resultCode === 0 ) {
                                                props.unfollow(u.id);
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button className={`${s.follow} ${s.button}`} onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {withCredentials: true, headers: {
                                            "API-KEY" : "40ffb3ac-7a26-461e-9d58-b5b7054c7f94"}})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        })
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
}


export default AllUsers