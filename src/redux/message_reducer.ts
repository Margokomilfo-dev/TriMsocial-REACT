import {UserDataType, MessageDataType} from "./types";
import {reset} from "redux-form";
import {TrimStateType} from "./store_redux";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const ADD_MESS = 'TriM/message/ADD-MESS'

let inicialization = {
    userData: [
        { name: 'Margo', id: 1 },
        { name: 'Mia', id: 2 },
        { name: 'Maiotta', id: 3 },
        { name: 'Leo', id: 4 }
    ] as Array<UserDataType>,
    newMessageText: '',
    messageData: [
            { message: 'Hello! How are you?' },
            { message: '=)?' },
            { message: '...?' },
            { message: 'Hello! How are you?' }
    ]as Array<MessageDataType>,
}
type InicializationType = typeof inicialization

let messageReducer = (state = inicialization, action: ActionsTypes): InicializationType => {
    switch (action.type) {
        case ADD_MESS: {
            type NewMesDataType = {
                id: number
                message: string
            }
            let newMesData = {
                message: action.value
            }as NewMesDataType
            return {
                ...state,
                messageData: [...state.messageData, newMesData] as any,
            };
        }
        default:
            return state;
    }
}
type ActionsTypes = AddStringType

type AddStringType = {
    type:typeof ADD_MESS
    value: string
}
export const addMess = (value: string): AddStringType=> ({type: ADD_MESS, value});


type GetStateType = () => TrimStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkActionType = ThunkAction<any, TrimStateType, any, ActionsTypes>

export const addMessTC = (value: string): ThunkActionType => (dispatch: any) => {
    dispatch(addMess(value));
    dispatch(reset('addMessageForm'));
}

export default messageReducer;