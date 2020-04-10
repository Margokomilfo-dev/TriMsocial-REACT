import {allUsersAPI} from "../api/api";

let FOLLOW = 'TriM/users/FOLLOW',
    UNFOLLOW = 'TriM/users/UNFOLLOW',
    SETUSERS = 'TriM/users/SETUSERS',
    SETCURRENTPAGE = 'TriM/users/SETCURRENTPAGE',
    SETUSERSTOTALCOUNT = 'TriM/users/SETUSERSTOTALCOUNT',
    TOGGLEISLOADER = 'TriM/users/TOGGLEISLOADER',
    TOGGLE_FOLLOWING_IN_PROCESS = 'TriM/users/TOGGLE_FOLLOWING_IN_PROCESS'

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

export const getUsersTC = (currentPage, countUsersOnPage) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsLoader(true))
    let response = await allUsersAPI.getAllUsers(currentPage, countUsersOnPage)
    dispatch(toggleIsLoader(false))
    dispatch(setUsers(response.items))
    dispatch(setUsersTotalCount(response.totalCount))
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

export const followTC = (userId) => async (dispatch) => {
    followUnfollow(dispatch, userId, allUsersAPI.followPost, followSuccess)
}

export default usersReducer;