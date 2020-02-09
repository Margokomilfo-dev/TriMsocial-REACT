let ADD_POST = 'ADD-POST',
    ON_POST_TEXT_CHANGE = 'ON-POST-TEXT-CHANGE';

let mainReducer = (data, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPostData = {
                header: 'some text...',
                content: data.newPostText,
                data: '22.22.22'
            }
            data.postData.unshift(newPostData);
            data.newPostText = '';
            return data;

        case ON_POST_TEXT_CHANGE:
            data.newPostText = action.text; 
            return data;

        default:
            return data;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostTextChangeActionCreator = (newPostText) => ({type: ON_POST_TEXT_CHANGE, text: newPostText});
export default mainReducer;