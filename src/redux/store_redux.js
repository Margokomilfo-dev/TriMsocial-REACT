import { createStore, combineReducers } from "redux";
import mainReducer from "./main_reducer";
import messageReducer from "./message_reducer";

let redusers = combineReducers(
    {
        mainPage: mainReducer,
        messagePage: messageReducer
    }
);


let store = createStore(redusers);

export default store; 
