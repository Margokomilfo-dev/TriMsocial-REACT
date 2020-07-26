import React, { FC } from 'react'
import Paginator from "./Paginator/Paginator";
import UserForAllUsers from "./UserForAllUsers/UserForAllUsers";
import {ProfileType, UserDataType} from "../../../redux/types";

type PropsType = {
    users: Array<UserDataType>
    followingInProcess: Array<number>
    totalUsersCount: number
    countUsersOnPage: number
    currentPage: number
    isLogin: boolean

    onPageChanged: (pageNumber: number) => void
    unfollowTC: (id: number) => void
    followTC: (id: number, name: string, photos: string) => void
}
const AllUsers: FC<PropsType> = (props) => {

    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} countUsersOnPage={props.countUsersOnPage}
                       onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
            {props.users.map(u =>
                <div key={u.id}>
                    <UserForAllUsers user={u} followingInProcess={props.followingInProcess}
                                     unfollowTC={props.unfollowTC}
                                     followTC={props.followTC}
                    />
                </div>)
            }
        </div>
    )
};

export default AllUsers