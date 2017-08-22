import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducers/reducer';
import {increment, decrement} from './actions/actions';
import Counter from './components/counter/Counter.jsx';
import App from './app.jsx';

const store = createStore(counter);
const rootEl = document.getElementById('app');

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl
);

render();
store.subscribe(render);
