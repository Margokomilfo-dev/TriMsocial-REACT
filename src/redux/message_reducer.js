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

let messageReducer = (data = inicialization, action) => {
    switch (action.type) {
        case ADD_MESS:
            let newMesData = {
                message: data.newMessageText
            }
            data.messageData.push(newMesData);
            data.newMessageText = '';
            return data;

        case ON_MESS_TEXT_CHANGE:
            data.newMessageText = action.text; 
            return data;

        default:
            return data;
    }
}

export const addMessActionCreator = () => ({type: ADD_MESS});
export const onMessTextChangeActionCreator = (newMessageText) => ({type: ON_MESS_TEXT_CHANGE, text: newMessageText});
export default messageReducer;