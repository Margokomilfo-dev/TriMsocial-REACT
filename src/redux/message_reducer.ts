import {UserDataType, MessageDataType} from "./types";
import {reset} from "redux-form";
import {addPost} from "./main_reducer";

let ADD_MESS = 'TriM/message/ADD-MESS'



let inicialization = {
    userData: [
        { name: 'Margo', id: 1 },
        { name: 'Mia', id: 2 },
        { name: 'Maiotta', id: 3 },
        { name: 'Leo', id: 4 }
    ] as Array<UserDataType>,
    newMessageText: '',
    messageData:
        [
            { message: 'Hello! How are you?' },
            { message: '=)?' },
            { message: '...?' },
            { message: 'Hello! How are you?' }
    ]as Array<MessageDataType>,
}
type InicializationType = typeof inicialization

let messageReducer = (state = inicialization, action: any): InicializationType => {
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
type AddStringType = {
    type:typeof ADD_MESS
    value: string
}
export const addMess = (value: string): AddStringType=> ({type: ADD_MESS, value});

export const addMessTC = (value: string) => (dispatch: any) => {
    dispatch(addMess(value));
    dispatch(reset('addMessageForm'));
}
export default messageReducer;