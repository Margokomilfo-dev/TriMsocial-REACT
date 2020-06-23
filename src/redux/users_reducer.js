import {allUsersAPI} from "../api/api";
import {setAuthAndUserURLPhoto} from "./auth_reducer";
import {initializedSuccess} from "./trim_reducer";

let FOLLOW = 'TriM/users/FOLLOW',
    UNFOLLOW = 'TriM/users/UNFOLLOW',
    SETUSERS = 'TriM/users/SETUSERS',
    SETCURRENTPAGE = 'TriM/users/SETCURRENTPAGE',
    SETUSERSTOTALCOUNT = 'TriM/users/SETUSERSTOTALCOUNT',
    TOGGLEISLOADER = 'TriM/users/TOGGLEISLOADER',
    TOGGLE_FOLLOWING_IN_PROCESS = 'TriM/users/TOGGLE_FOLLOWING_IN_PROCESS',
    SET_FRIENDS = 'TriM/users/SET_FRIENDS'

let inicialization = {
    users: [],
    countUsersOnPage: 6,
    totalUsersCount: '',
    currentPage: 1,
    countPages: '',
    isLoader: false,
    followingInProcess: [],
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
                src: 'https://i2.wp.com/tbso.ca/wp-content/uploads/2019/05/5a-FS-Lion-King-and-Animals.png?fit=300%2C300&ssl=1',
                name: 'Vladimir'
            }

        ]
}

const usersReducer = (state = inicialization, action) => {
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

export const followSuccess = (userid) => ({type: FOLLOW, userid});
export const unfollowSuccess = (userid) => ({type: UNFOLLOW, userid});
export const setUsers = (users) => ({type: SETUSERS, users});
export const setCurrentPage = (page) => ({type: SETCURRENTPAGE, page});
export const setUsersTotalCount = (count) => ({type: SETUSERSTOTALCOUNT, count});
export const toggleIsLoader = (isLoader) => ({type: TOGGLEISLOADER, isLoader});
export const toggleFollowingInProcess = (isLoader, userId) => ({type: TOGGLE_FOLLOWING_IN_PROCESS, isLoader, userId});
export const setFriendsData = (name, src) => ({type: SET_FRIENDS, data: {name, src}});


export const getUsersTC = (currentPage, countUsersOnPage) => async (dispatch) => {
    try {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsLoader(true))
        let response = await allUsersAPI.getAllUsers(currentPage, countUsersOnPage)
        dispatch(toggleIsLoader(false))
        dispatch(setUsers(response.items))
        dispatch(setUsersTotalCount(response.totalCount))
    } catch(error){
        debugger
    }

};

const followUnfollow = async (dispatch, userId, apiMethod, actionCreatur) => {
    dispatch(toggleFollowingInProcess(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreatur(userId));
    }
    dispatch(toggleFollowingInProcess(false, userId));
};

export const unfollowTC = (userId) => async (dispatch) => {
    followUnfollow(dispatch, userId, allUsersAPI.followDelete, unfollowSuccess)

};


export const followTC  = (userId, name, src) => async (dispatch) => {
    dispatch(toggleFollowingInProcess(true, userId));
    let response = await allUsersAPI.followPost(userId)
    if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingInProcess(false, userId));
};


export default usersReducer;