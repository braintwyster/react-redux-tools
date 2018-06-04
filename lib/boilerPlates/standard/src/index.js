//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'


import App from './components/App'
import Reducers from './reducers/index'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(

    <Provider store={ createStoreWithMiddleware(Reducers) }>
        <Router>
            <App />
        </Router>
    </Provider>

    , document.getElementById('root')
);
