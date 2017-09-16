/* eslint-env browser */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducer from './reducers';
import sagas from './sagas';
import App from './app';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

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
