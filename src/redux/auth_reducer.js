import {headerAPI} from "../api/api";
import {withAuthRedirect} from "./HOC";
import {stopSubmit} from "redux-form";
import {validate} from "../components/Validations";

let SET_USER_DATA = 'SET_USER_DATA',
    SET_USERS_PHOTO = 'SET_USERS_PHOTO',
    CAPCHA = 'CAPCHA'

let inicialization = {
    id: null,
    login: null,
    email: null,
    isLogin: false,
    userPhoto: null,
    capcha: false,
    urlCapcha: ''
}

const authReducer = (state = inicialization, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_USERS_PHOTO: {
            return{
                ...state,
                userPhoto: action.url
            }
        }
        case CAPCHA: {
            return {
                ...state,
                capcha: true,
                urlCapcha: action.url
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email, isLogin) => ({type: SET_USER_DATA, data: {id, login, email, isLogin}});
export const setUserURLPhoto = (url) => ({type: SET_USERS_PHOTO, url});
export const setCapcha = (url) => ({type: CAPCHA, url});


export const setAuthAndUserURLPhotoThunkCreator = () => {
    return (dispatch) => {
        headerAPI.me().then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setAuthUserData(id,login, email, true));
                //------------------------
                let userId = response.data.id;
                headerAPI.getURLPhoto(userId).then(response => {
                    dispatch(setUserURLPhoto(response.photos.small));
                })
            }
        })
    }
}

export const login = (email, password, rememberMe, capcha) => {
    return (dispatch) => {

        headerAPI.login(email, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setAuthUserData(id,login, email, true));
            } else if (response.resultCode === 10){
                headerAPI.capcha().then(response => {
                    dispatch(setCapcha(response.url))
                    dispatch(setAuthUserData(null,null, null, false));
                })
            } else {
                let message = response.messages.length
                dispatch(stopSubmit('loginForm', {_error: message}))
            }
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        headerAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null,null, null, false));
                withAuthRedirect()
            }
        })
    }
}
export default authReducer;