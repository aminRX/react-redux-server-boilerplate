import { createSelector } from 'reselect';
import Todo from './../reducers/todo';

const stateSelector = state => state.todo;
const getVisibilyFilter = state => state.visibilityFilter;
const todosSelector = state => state.get('todo');

export const getVisibilyTodos = createSelector(
  [stateSelector, getVisibilyFilter], Todo);
