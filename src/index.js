import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    messages: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'addMessage': {
            return {
                messages: state.messages.concat(action.payload),
            }
        }

        default:
            return state;
    }
}

const store = createStore(reducer, initialState);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
