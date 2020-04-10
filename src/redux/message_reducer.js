let ADD_MESS = 'TriM/message/ADD-MESS'
let inicialization = {
    userData: [
        { name: 'Margo', id: 1 },
        { name: 'Mia', id: 2 },
        { name: 'Maiotta', id: 3 },
        { name: 'Leo', id: 4 }
    ],
    newMessageText: '',
    messageData:
        [
            { message: 'Hello! How are you?' },
            { message: '=)?' },
            { message: '...?' },
            { message: 'Hello! How are you?' }
    ],
}

let messageReducer = (state = inicialization, action) => {
    switch (action.type) {
        case ADD_MESS: {
            let newMesData = {
                message: action.value
            }
            return {
                ...state,
                messageData: [...state.messageData, newMesData],
            };
        }
        default:
            return state;
    }
}

export const addMess = (value) => ({type: ADD_MESS, value});
export default messageReducer;