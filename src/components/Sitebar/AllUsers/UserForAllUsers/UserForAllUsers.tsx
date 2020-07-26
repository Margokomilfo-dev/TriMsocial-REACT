import React, {FC} from 'react'
import s from './UserForAllUsers.module.css'
import photo from '../pic/nophoto.png'
import {PhotosType, ProfileType, UserDataType} from "../../../../redux/types";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: UserDataType
    followingInProcess: Array<number>
    unfollowTC: (id: number) => void
    followTC: (id: number, name: string, photos: string) => void
 }
const UserForAllUsers: FC<PropsType> = ({user, followingInProcess, unfollowTC, followTC}) => {
    let u = user


    // @ts-ignore
    return (

        <div className={s.user_container}>
            <div className={s.left}>
                <div className={s.photo}>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : photo} alt="logo"/>
                    </NavLink>
                </div>
                <div>
                     {u.followed
                        ? <button disabled={followingInProcess.some(id => id === u.id)}
                                  className={`${s.unfollow} ${s.button}`} onClick={() => {
                            unfollowTC(u.id)
                        }}>Unfollow</button>
                        : <button disabled={followingInProcess.some(id => id === u.id)}
                                  className={`${s.follow} ${s.button}`} onClick={() => {
                            followTC(u.id, u.name, u.photos.small)
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
        </div>
    )
};


export default UserForAllUsers