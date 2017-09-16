import { fromJS, Map } from 'immutable';
import {
  ADD_TODO,
  SHOW_ALL_TODOS,
  CHANGE_NAME_TEXT,
} from './../constans/constans';

const initialState = fromJS({
  visibilityFilter: SHOW_ALL_TODOS,
  nameText: '',
  todo: [
    { id: '1', name: 'kurapika' },
    { id: '2', name: 'leorio' },
    { id: '3', name: 'gon' },
    { id: '4', name: 'Killu' },
  ],
});

export default (state = initialState, action = { type: SHOW_ALL_TODOS }) => {
  switch (action.type) {
    case ADD_TODO:
      return state.update('todo', todo => todo.push(Map(action.payload)));
    case SHOW_ALL_TODOS:
      return state;
    case CHANGE_NAME_TEXT:
      return state.set('nameText', action.input);
    default:
      return state;
  }
};
