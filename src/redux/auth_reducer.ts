import {headerAPI} from "../api/api";
import {stopSubmit} from "redux-form";


let SET_USER_DATA = 'TriM/auth/SET_USER_DATA',
    SET_USERS_PHOTO = 'TriM/auth/SET_USERS_PHOTO',
    CAPTCHA = 'TriM/auth/CAPTCHA'

let auth = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isLogin: false  as boolean,
    userPhoto: null as string | null ,
    captcha: false as boolean,
    urlCaptcha: '' as string
}
export type AuthType = typeof auth


const authReducer = (state = auth, action: any):AuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        case SET_USERS_PHOTO: {
            return {
                ...state,
                userPhoto: action.url
            }
        }
        case CAPTCHA: {
            return {
                ...state,
                captcha: true,
                urlCaptcha: action.url
            }
        }

        default:
            return state;
    }
}
type SetAuthUserDataDataActionType = {
    id: number | null
    login: string | null
    email: string | null
    isLogin: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: SetAuthUserDataDataActionType
}
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isLogin: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    data: {id, login, email, isLogin}
})

type SetUserURLPhotoActionType = {
    type: typeof SET_USERS_PHOTO
    url: string | null
}
export const setUserURLPhoto = (url: string | null):SetUserURLPhotoActionType => ({type: SET_USERS_PHOTO, url});

type setCaptchaActionType = {
    type: typeof CAPTCHA,
    url: string | null
}
export const setCaptcha = (url: string | null):setCaptchaActionType => ({type: CAPTCHA, url});

export const setAuthAndUserURLPhoto = () => async (dispatch: any) => {
    let response1 = await headerAPI.me()
    if (response1.resultCode === 0) {
        let {id, email, login} = response1.data;
        dispatch(setAuthUserData(id, login, email, true));
        //------------------------
        let userId = response1.data.id;
        let response2 = await headerAPI.getURLPhoto(userId)
        dispatch(setUserURLPhoto(response2.photos.small))
    }
}

export const login = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {
    let response = await headerAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, login, email, true));
    } else if (response.resultCode === 10) {
       dispatch(getCaptcha())
        let message = response.messages
        dispatch(stopSubmit('loginForm', {_error: message}))
    } else {
        let message = response.messages
       dispatch(stopSubmit('loginForm', {_error: message}))
    }
}

export const logout = () => async (dispatch: any) => {
    let response = await headerAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptcha = () => async (dispatch: any) => {
    let response = await headerAPI.captcha()
    dispatch(setCaptcha(response.url))
}

export default authReducer;