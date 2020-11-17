import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers"
import {Provider} from "react-redux";
import {AUTHENTICATE_USER} from "./actions/auth";

localStorage.setItem("ip",'http://216.171.38.35:8080')
//localStorage.setItem("ip",'http://localhost:8080')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const token = localStorage.getItem('token');
if (token) {
    store.dispatch({ type: AUTHENTICATE_USER });
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
