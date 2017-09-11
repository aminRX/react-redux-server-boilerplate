/* eslint-env browser */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './app';

const store = createStore(reducer);
const rootEl = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl,
  );
};

render(App);
store.subscribe(render);
