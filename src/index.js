/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store_redux';
import './index.css';
import TriM from './TriM';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";

// let rerenderTriM = () => {
     ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <TriM state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
// }

// rerenderTriM();

// store.subscribe(() => {
//     rerenderTriM();
// });
//
