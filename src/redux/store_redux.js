import {createStore, combineReducers, applyMiddleware} from "redux";
import mainReducer from "./main_reducer";
import messageReducer from "./message_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunk from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import trimReducer from "./trim_reducer";

let reducers = combineReducers(
    {
        mainPage: mainReducer,
        messagePage: messageReducer,
        usersPage: usersReducer,
        auth: authReducer,
        trim : trimReducer,
        form: formReducer
    }
);


let store = createStore(reducers, applyMiddleware(thunk));
window.store = store

export default store; 
