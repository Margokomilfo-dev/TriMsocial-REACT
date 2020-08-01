import {allUsersAPI} from "../api/api";
import {setAuthAndUserURLPhoto} from "./auth_reducer";
import {initializedSuccess} from "./trim_reducer";
import {UserDataType} from "./types";
import {TrimStateType} from "./store_redux";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'TriM/users/FOLLOW'
const UNFOLLOW = 'TriM/users/UNFOLLOW'
const SETUSERS = 'TriM/users/SETUSERS'
const SETCURRENTPAGE = 'TriM/users/SETCURRENTPAGE'
const SETUSERSTOTALCOUNT = 'TriM/users/SETUSERSTOTALCOUNT'
const TOGGLEISLOADER = 'TriM/users/TOGGLEISLOADER'
const TOGGLE_FOLLOWING_IN_PROCESS = 'TriM/users/TOGGLE_FOLLOWING_IN_PROCESS'
const SET_FRIENDS = 'TriM/users/SET_FRIENDS'

type FriendDataType = {
    src: string
    name: string
}
let inicialization = {
    users: [] as Array<UserDataType>,
    countUsersOnPage: 6,
    totalUsersCount: 0,
    currentPage: 1,
    countPages: 0,
    isLoader: false,
    followingInProcess: [] as Array<number>,//Array of users ids
    friendData: [
            {
                src: 'https://img.favpng.com/15/3/24/kion-simba-lion-nala-disney-junior-png-favpng-yPCg6Bur9WV3jCagMjxL54mn1.jpg',
                name: 'Leo'
            },
            {
                src: 'https://i.insider.com/5aa10ca0d877e618008b4678?width=1100&format=jpeg&auto=webp',
                name: 'Mia'
            },
            {
                src: 'https://images.fineartamerica.com/images-medium-large-5/male-lion-face-close-up-elle-walby.jpg',
                name: 'Vladimir'
            }

        ] as Array<FriendDataType>,
    followed: false
}
export type InicializationType = typeof inicialization

const usersReducer = (state = inicialization, action: ActionsTypes): InicializationType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }
        case SET_FRIENDS: {
            debugger
            let newFriend = {
                name: action.data.name,
                src: action.data.src
            }
             return {
                 ...state,
               //  friendData: state.friendData.map( u => {
               //      if(u.name === action.data.name && u.src === action.data.src) {
               //          return {...u}
               //      } else {
               //          return {newFriend}
               //      }
               // })
                friendData: [...state.friendData, action.data ]
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SETUSERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SETCURRENTPAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SETUSERSTOTALCOUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLEISLOADER: {
            return {
                ...state,
                isLoader: action.isLoader
            }
        }
        case TOGGLE_FOLLOWING_IN_PROCESS: {
            return {
                ...state,
                followingInProcess: action.isLoader
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

type ActionsTypes = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType |
    SetCurrentPageActionType | SetUsersTotalCountActionType |ToggleIsLoaderActionType |
    ToggleFollowingInProcessActionType | SetFriendsDataActionType

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userid: number
}
export const followSuccess = (userid: number):FollowSuccessActionType => ({type: FOLLOW, userid});

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userid: number
}
export const unfollowSuccess = (userid: number):UnfollowSuccessActionType => ({type: UNFOLLOW, userid});

type SetUsersActionType = {
    type: typeof SETUSERS
    users: Array<UserDataType>
}
export const setUsers = (users: Array<UserDataType>):SetUsersActionType => ({type: SETUSERS, users});

type SetCurrentPageActionType = {
    type: typeof SETCURRENTPAGE
    page: number
}
export const setCurrentPage = (page: number):SetCurrentPageActionType => ({type: SETCURRENTPAGE, page});

type SetUsersTotalCountActionType = {
    type: typeof SETUSERSTOTALCOUNT
    count: number
}
export const setUsersTotalCount = (count: number):SetUsersTotalCountActionType => ({type: SETUSERSTOTALCOUNT, count});

type ToggleIsLoaderActionType = {
    type: typeof TOGGLEISLOADER
    isLoader: boolean
}
export const toggleIsLoader = (isLoader: boolean):ToggleIsLoaderActionType => ({type: TOGGLEISLOADER, isLoader});

type ToggleFollowingInProcessActionType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROCESS
    isLoader: boolean
    userId: number
}
export const toggleFollowingInProcess = (isLoader: boolean, userId: number): ToggleFollowingInProcessActionType => ({type: TOGGLE_FOLLOWING_IN_PROCESS, isLoader, userId});

type SetFriendsDataActionType = {
    type: typeof SET_FRIENDS
    data: FriendDataType
}
export const setFriendsData = (name: string, src: string):SetFriendsDataActionType => ({type: SET_FRIENDS, data: {name, src}});

type GetStateType = () => TrimStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkActionType = ThunkAction<Promise<void>, TrimStateType, any, ActionsTypes>

export const getUsersTC = (currentPage: number, countUsersOnPage: number): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsLoader(true))
        let response = await allUsersAPI.getAllUsers(currentPage, countUsersOnPage)
        dispatch(toggleIsLoader(false))
        dispatch(setUsers(response.items))
        dispatch(setUsersTotalCount(response.totalCount))
    } catch(error){
    }

};

const followUnfollow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => UnfollowSuccessActionType | FollowSuccessActionType) => {
    dispatch(toggleFollowingInProcess(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProcess(false, userId));
};

export const unfollowTC = (userId: number) => async (dispatch: any) => {
    followUnfollow(dispatch, userId, allUsersAPI.followDelete, unfollowSuccess)

};


export const followTC  = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFollowingInProcess(true, userId));
    let response = await allUsersAPI.followPost(userId)
    if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingInProcess(false, userId));
};


export default usersReducer;