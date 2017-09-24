import { connect } from 'react-redux';
import FilterableTodo from '../components/todo/FilterableTodo';
import { toJS } from './App/toJS';
import { changeNameText, addTodo } from '../actions/todo';
import { getVisibilyTodos } from './../selectors/todoSelector';

export function makeMapStateToProps(state) {
  const todo = getVisibilyTodos(state, state.visibilityFilter);
  return {
    todos: todo.get('todo'),
    count: todo.get('todo').size,
    nameText: todo.get('nameText'),
  };
}

export function mapDispathToProps(dispatch) {
  return {
    onClick(name) {
      dispatch(addTodo(name));
    },

    onChange: (input) => {
      dispatch(changeNameText(input));
    },
  };
}

export default connect(makeMapStateToProps, mapDispathToProps)(toJS(FilterableTodo));
