import React from 'react'
import s from './AllUsers.module.css'
import photo from './pic/nophoto.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {allUsersAPI} from "../../../api/api";

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
                                ? <button disabled={props.followingInProcess.some(id => id === u.id)} className={`${s.unfollow} ${s.button}`} onClick={() => {
                                    props.toggleFollowingInProcess(true, u.id)
                                    let id = `${u.id}`;

                                    allUsersAPI.followDelete(id).then(response => {
                                        if (response.resultCode === 0 ) {
                                            props.unfollow(u.id);
                                        }
                                        props.toggleFollowingInProcess(false, u.id)
                                    });


                                }}>Unfollow</button>
                                : <button  disabled={props.followingInProcess.some(id => id === u.id)} className={`${s.follow} ${s.button}`} onClick={() => {
                                    props.toggleFollowingInProcess(true, u.id)
                                    let id = `${u.id}`;

                                    allUsersAPI.followPost(id).then(response => {
                                        if (response.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleFollowingInProcess(false, u.id)
                                    });


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