import React from 'react'
import Paginator from "./Paginator/Paginator";
import UserForAllUsers from "./UserForAllUsers/UserForAllUsers";
import {setFriendsData} from "../../../redux/users_reducer";

const AllUsers = (props) => {

    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} countUsersOnPage={props.countUsersOnPage}
                       onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
            {props.users.map(u =>
                <div key={u.id}>
                    <UserForAllUsers user={u} followingInProcess={props.followingInProcess}
                                     unfollowTC={props.unfollowTC}
                                     followTC={props.followTC}
                                     setFriendsData={props.setFriendsData}/>
                </div>)
            }
        </div>
    )
};

export default AllUsers