import React, { act } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';




const reducer = (state = 0, action) => {
    if(action.type === "plus" ) {
        return state + 1
    }

    if (action.type === "minus") {
        if(state >= 1) {
            return state - 1
        }
    }

    if (action.type === "reset") {
        return state = 0
    }
    return state
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

