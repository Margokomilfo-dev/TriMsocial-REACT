/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store_redux';
import './index.css';
import TriM from './TriM';
import {HashRouter} from 'react-router-dom';
import {Provider} from "react-redux";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <TriM state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </Provider>
    </HashRouter>, document.getElementById('root'));

