import React from 'react';
import PropTypes from 'prop-types';
import TodoTitle from './TodoTitle';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoCount from './TodoCount';

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  })).isRequired,
  nameText: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

function FilterableTodo({ todos, onClick, count, nameText, onChange }) {
  return (
    <div>
      <TodoTitle title={'Todo'} />
      <AddTodo onClick={onClick} nameText={nameText} onChange={onChange} />
      <TodoList todos={todos} />
      <TodoCount count={count} />
    </div>
  );
}

FilterableTodo.propTypes = propTypes;

export default FilterableTodo;
