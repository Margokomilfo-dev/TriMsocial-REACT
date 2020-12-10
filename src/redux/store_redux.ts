import {createStore, combineReducers, applyMiddleware, compose} from "redux";
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

type ReducersType = typeof reducers
export type TrimStateType = ReturnType <ReducersType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunk)));

// @ts-ignore
window.__store__= store

export default store