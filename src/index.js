/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store_redux';
import './index.css';
import TriM from './TriM';
import { BrowserRouter } from 'react-router-dom';

let rerenderTriM = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <TriM state={state} 
                dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderTriM(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderTriM(state);
});

