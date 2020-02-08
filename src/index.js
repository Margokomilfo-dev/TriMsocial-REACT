/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/data';
import './index.css';
import TriM from './TriM';
import { BrowserRouter } from 'react-router-dom';

let rerenderTriM = (data) => {
    ReactDOM.render(
        <BrowserRouter>
            <TriM data={data} 
                dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderTriM(store.getData());
store.subscribe(rerenderTriM);

