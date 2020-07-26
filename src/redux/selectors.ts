//--------------------auth-------------------------
import {TrimStateType} from "./store_redux";

export const getIsLogin = (state: TrimStateType) => {
    return state.auth.isLogin
}
export const getLogin = (state: TrimStateType) => {
    return state.auth.login
}
export const getId = (state: TrimStateType) => {
    return state.auth.id
}
export const getUserPhoto = (state: TrimStateType) => {
    return state.auth.userPhoto
}
export const getEmail= (state: TrimStateType) => {
    return state.auth.email
}
export const getCapcha= (state: TrimStateType) => {
    return state.auth.captcha
}
export const getUrlCapcha= (state: TrimStateType) => {
    return state.auth.urlCaptcha
}

//----------------------main-------------------------
export const getProfile = (state: TrimStateType) => {
    return state.mainPage.profile
}
export const getStatus = (state: TrimStateType) => {
    return state.mainPage.status
}

//-----------------------message---------------------

//-----------------------trim------------------------
export const getInitialed = (state: TrimStateType) => {
    return state.trim.initialed
}

//--------------------------users--------------------
export const getUsers = (state: TrimStateType) => {
    return state.usersPage.users
}
export const getCountUsersOnPage = (state: TrimStateType) => {
    return state.usersPage.countUsersOnPage
}
export const getTotalUsersCount = (state: TrimStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: TrimStateType) => {
    return state.usersPage.currentPage
}
export const getCountPages = (state: TrimStateType) => {
    return state.usersPage.countPages
}
export const getIsLoader = (state: TrimStateType) => {
    return state.usersPage.isLoader
}
export const getFollowingInProcess = (state: TrimStateType) => {
    return state.usersPage.followingInProcess
}
export const getFriendData = (state: TrimStateType) => {
    return state.usersPage.friendData
}