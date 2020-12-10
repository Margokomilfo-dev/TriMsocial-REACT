import {setAuthAndUserURLPhoto} from "./auth_reducer";
import { TrimType } from "./types";

let INITIALISED_SUCCESS = 'TriM/trim/INITIALISED_SUCCESS'

let trim: TrimType = {
    initialed: false
}

const trimReducer = (state = trim, action: any):TrimType  => {
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

type InitializedSuccessActionType = {
    type: typeof INITIALISED_SUCCESS // 'INITIALISED_SUCCESS'
}
export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALISED_SUCCESS});


// export const initializationTriM = () => {
//     return (dispatch) => {
//         let promise = dispatch(setAuthAndUserURLPhoto())
//         Promise.all([promise]).then(() => {
//            dispatch(initializationSuccess())
//        })
//     }
// }
export const initializationTriM = () => {
    return (dispatch: any) => {
        let promise = dispatch(setAuthAndUserURLPhoto())
        promise.then(() => {
           dispatch(initializedSuccess())
       })
    }
}

export default trimReducer;