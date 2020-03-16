let ADD_MESS = 'ADD-MESS',
    ON_MESS_TEXT_CHANGE = 'ON-MESS-TEXT-CHANGE';
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
                message: state.newMessageText
            }
            return {
                ...state,
                messageData: [...state.messageData, newMesData],
                newMessageText: ''
            };
        }
        
        case ON_MESS_TEXT_CHANGE: {
            return {
                ...state,
                newMessageText: action.text
            };
        }

        default:
            return state;
    }
}

export const addMess = () => ({type: ADD_MESS});
export const onMessTextChange = (newMessageText) => ({type: ON_MESS_TEXT_CHANGE, text: newMessageText});
export default messageReducer;