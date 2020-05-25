//--------------------auth-------------------------
export const getIsLogin = (state) => {
    return state.auth.isLogin
}
export const getLogin = (state) => {
    return state.auth.login
}
export const getId = (state) => {
    return state.auth.id
}
export const getUserPhoto = (state) => {
    return state.auth.userPhoto
}
export const getEmail= (state) => {
    return state.auth.email
}
export const getCapcha= (state) => {
    return state.auth.capcha
}
export const getUrlCapcha= (state) => {
    return state.auth.urlCapcha
}

//----------------------main-------------------------
export const getProfile = (state) => {
    return state.mainPage.profile
}
export const getStatus = (state) => {
    return state.mainPage.status
}

//-----------------------message---------------------

//-----------------------trim------------------------
export const getInitialed = (state) => {
    return state.trim.initialed
}

//--------------------------users--------------------
export const getUsers = (state) => {
    return state.usersPage.users
}
export const getCountUsersOnPage = (state) => {
    return state.usersPage.countUsersOnPage
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getCountPages = (state) => {
    return state.usersPage.countPages
}
export const getIsLoader = (state) => {
    return state.usersPage.isLoader
}
export const getFollowingInProcess = (state) => {
    return state.usersPage.followingInProcess
}
export const getFriendData = (state) => {
    return state.usersPage.friendData
}