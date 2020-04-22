import {mainAPI} from "../api/api";

let ADD_POST = 'TriM/main/ADD-POST',
    SET_USER_PROFILE = 'TriM/main/SET_USER_PROFILE',
    SET_USER_STATUS = 'TriM/main/SET_USER_STATUS',
    DELETE_POST = 'TriM/main/DELETE_POST',
    SAVE_PHOTO_SUCCESS = 'TriM/main/SAVE_PHOTO_SUCCESS'


let inicialization = {
    personData: {},
    postData:
        [
            {
                id: 1,
                header: 'some text...',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo vitae delectus culpa est in eius quis illum ipsum quibusdam, possimus doloremque officia at ut, aspernatur voluptatum laborum blanditiis repellat rerum.',
                data: '22.22.22'
            },
            {id: 2, header: 'some text...', content: 'Your text.', data: '22/02/2020'},
            {id: 3, header: 'some text...', content: 'and it too', data: '22/02/2020'},
        ],
    friendData:
        [
            {
                src: 'https://img.favpng.com/15/3/24/kion-simba-lion-nala-disney-junior-png-favpng-yPCg6Bur9WV3jCagMjxL54mn1.jpg',
                alt: 'Leo',
                name: 'Leo'
            },
            {
                src: 'https://i.insider.com/5aa10ca0d877e618008b4678?width=1100&format=jpeg&auto=webp',
                alt: 'Leo',
                name: 'Mia'
            },
            {
                src: 'https://i2.wp.com/tbso.ca/wp-content/uploads/2019/05/5a-FS-Lion-King-and-Animals.png?fit=300%2C300&ssl=1',
                alt: 'Vladimir',
                name: 'Vladimir'
            },
            {src: '', alt: '', name: 'Mia'},
            {src: '', alt: '', name: 'Margo'},
            {src: '', alt: '', name: 'Leo'},
            {src: '', alt: '', name: 'Vladimir'}
        ],
    profile: null,
    status: ''
    //'Никогда не жалуйтесь на судьбу! Ей с вами, может быть, тоже не очень-то и приятно=)'
}

let mainReducer = (state = inicialization, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPostData = {
                header: 'some text...',
                content: action.value,
                data: action.curData
            }
            return {
                ...state,
                postData: [newPostData, ...state.postData],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            debugger
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPost = (value, curData) => ({type: ADD_POST, value, curData});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const setUser = (userId) => async (dispatch) => {
    let response = await mainAPI.getUserProfile(userId)
    dispatch(setUserProfile(response));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await mainAPI.getUserStatus(userId)
    dispatch(setUserStatus(response));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await mainAPI.updateUserStatus(status)
    if (response.resultCode === 0)
        dispatch(setUserStatus(status));
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await mainAPI.savePhoto(file)
    if (response.resultCode === 0)
        dispatch(savePhotoSuccess(response.data.photos));
}
export const saveNewData = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    let response = await mainAPI.saveNewData(profile)
    if (response.resultCode === 0)
        dispatch(setUser(userId));
}

export default mainReducer;

