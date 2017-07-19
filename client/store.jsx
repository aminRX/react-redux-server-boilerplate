import { createStore } from 'redux';
import counterApp from './reducers.jsx';

let store = createStore(counterApp);

export default store;
