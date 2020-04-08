import {allUsersAPI} from "../api/api";

let FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SETUSERS = 'SETUSERS',
    SETCURRENTPAGE = 'SETCURRENTPAGE',
    SETUSERSTOTALCOUNT = 'SETUSERSTOTALCOUNT',
    TOGGLEISLOADER = 'TOGGLEISLOADER',
    TOGGLE_FOLLOWING_IN_PROCESS = 'TOGGLE_FOLLOWING_IN_PROCESS'

let inicialization = {
    users: [],
    countUsersOnPage: 5,
    totalUsersCount: '',
    currentPage: 1,
    countPages: '',
    isLoader: false,
    followingInProcess: []
}

const usersReducer = (state = inicialization, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                //users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                //users: [...state.users],
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
        }case SETUSERSTOTALCOUNT: {
                return {
                    ...state,
                    totalUsersCount: action.count
                }
        }
        case TOGGLEISLOADER: {
            return{
                ...state,
                isLoader: action.isLoader
            }
        }
        case TOGGLE_FOLLOWING_IN_PROCESS: {
            return{
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

export const follow = (userid) => ({type: FOLLOW, userid});
export const unfollow = (userid) => ({type: UNFOLLOW, userid});
export const setUsers = (users) => ({type: SETUSERS, users});
export const setCurrentPage = (page) => ({type: SETCURRENTPAGE, page});
export const setUsersTotalCount = (count) => ({type: SETUSERSTOTALCOUNT, count});
export const toggleIsLoader = (isLoader) => ({type: TOGGLEISLOADER, isLoader});
export const toggleFollowingInProcess = (isLoader, userId) => ({type: TOGGLE_FOLLOWING_IN_PROCESS, isLoader, userId});

export const getUsersThunkCreator = (currentPage, countUsersOnPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsLoader(true));
        allUsersAPI.getAllUsers(currentPage, countUsersOnPage).then(response => {
            dispatch(toggleIsLoader(false));
            dispatch(setUsers(response.items));
            dispatch(setUsersTotalCount(response.totalCount));
        })
    }
};

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProcess(true, userId));
        allUsersAPI.followDelete(userId).then(response => {
            if (response.resultCode === 0 ) {
                dispatch(unfollow(userId));
            }
            dispatch(toggleFollowingInProcess(false, userId));
        });
    }
};

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProcess(true, userId));
        allUsersAPI.followPost(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(toggleFollowingInProcess(false, userId));
        });
    }
};



export default usersReducer;