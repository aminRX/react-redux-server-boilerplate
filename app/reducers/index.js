import { combineReducers } from 'redux';
import counter from './reducer';
import todo from './todo';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  visibilityFilter,
  counter,
  todo
});
