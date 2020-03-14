import {headerAPI} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA',
    AUTH_CHECK_AUT = 'AUTH_CHECK_AUT',
    SET_USERS_PHOTO = 'SET_USERS_PHOTO'

let inicialization = {
    id: null,
    login: null,
    email: null,
    isLogin: false,
    userPhoto: null
}

const authReducer = (state = inicialization, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isLogin: true

            }
        }
        case AUTH_CHECK_AUT: {
            return{
                ...state,
                id: null,
                login: null,
                email: null,
                isLogin: false
            }
        }
        case SET_USERS_PHOTO: {
            return{
                ...state,
                userPhoto: action.url
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}});
export const authCheckOut = () => ({type: AUTH_CHECK_AUT});
export const setUserURLPhoto = (url) => ({type: SET_USERS_PHOTO, url});


export const setAuthAndUserURLPhotoThunkCreator = () => {
    return (dispatch) => {
        headerAPI.me().then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setAuthUserData(id,login, email));
                //------------------------
                let userId = response.data.id;
                headerAPI.getURLPhoto(userId).then(response => {
                    dispatch(setUserURLPhoto(response.photos.small));
                })
            }
        })
    }
}
export default authReducer;