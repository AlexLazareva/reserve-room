import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import configureStore from './store';

const store = configureStore();

ReactDOM.render((
    <Provider store={store} >
        <Router>
            <Route />
        </Router>
    </Provider>
    ), document.querySelector('#app'));
