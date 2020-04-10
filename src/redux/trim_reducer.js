import {setAuthAndUserURLPhoto} from "./auth_reducer";

let INITIALISED_SUCCESS = 'TriM/trim/INITIALISED_SUCCESS'

let trim = {
    initialed: false
}

const trimReducer = (state = trim, action) => {
    switch (action.type) {
        case INITIALISED_SUCCESS: {
            return {
                ...state,
                initialed: true
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALISED_SUCCESS});


// export const initializationTriM = () => {
//     return (dispatch) => {
//         let promise = dispatch(setAuthAndUserURLPhoto())
//         Promise.all([promise]).then(() => {
//            dispatch(initializationSuccess())
//        })
//     }
// }
export const initializationTriM = () => {
    return (dispatch) => {
        let promise = dispatch(setAuthAndUserURLPhoto())
        promise.then(() => {
           dispatch(initializedSuccess())
       })
    }
}

export default trimReducer;