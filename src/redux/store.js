import mainReducer from "./main_reducer";
import messageReducer from "./message_reducer";

let store = {
    _data: {
        mainPage: {
            personData:
            {
                fio: 'Ivanova Ivanna', first_surname: 'Sidorova', nickname: '@ivasha',
                status: 'Никогда не жалуйтесь на судьбу! Ей с вами, может быть, тоже не очень-то и приятно=)',
                birthday_date: '12.12.1984', relationship: 'married', country: 'New Zealand',
                city: 'Aucland', profession: 'actress'
            },
            newPostText: '',
            postData:
                [
                    { header: 'some text...', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo vitae delectus culpa est in eius quis illum ipsum quibusdam, possimus doloremque officia at ut, aspernatur voluptatum laborum blanditiis repellat rerum.', data: '22.22.22' },
                    { header: 'some text...', content: 'Your text.', data: '22.22.22' },
                    { header: 'some text...', content: 'and it too', data: '22.22.22' },
                ],
            friendData:
                [
                    { src: 'https://img.favpng.com/15/3/24/kion-simba-lion-nala-disney-junior-png-favpng-yPCg6Bur9WV3jCagMjxL54mn1.jpg', alt: 'Leo', name: 'Leo' },
                    { src: 'https://i.insider.com/5aa10ca0d877e618008b4678?width=1100&format=jpeg&auto=webp', alt: 'Leo', name: 'Mia' },
                    { src: 'https://i2.wp.com/tbso.ca/wp-content/uploads/2019/05/5a-FS-Lion-King-and-Animals.png?fit=300%2C300&ssl=1', alt: 'Vladimir', name: 'Vladimir' },
                    { src: '', alt: '', name: 'Mia' },
                    { src: '', alt: '', name: 'Margo' },
                    { src: '', alt: '', name: 'Leo' },
                    { src: '', alt: '', name: 'Vladimir' }
                ]
        },
        messagePage: {
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
    },
    _callSubscriber() {},

    subscribe(observer) { this._callSubscriber = observer },
    getData() { return this._data },

    dispatch(action) {
        this._data.mainPage = mainReducer(this._data.mainPage, action);
        this._data.messagePage = messageReducer(this._data.messagePage, action);
        this._callSubscriber(this._data); 
    },
};


window.store = store;
export default store; 