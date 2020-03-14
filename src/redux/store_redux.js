import {createStore, combineReducers, applyMiddleware} from "redux";
import mainReducer from "./main_reducer";
import messageReducer from "./message_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunk from 'redux-thunk';

let redusers = combineReducers(
    {
        mainPage: mainReducer,
        messagePage: messageReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);


let store = createStore(redusers, applyMiddleware(thunk));
window.store = store

export default store; 
