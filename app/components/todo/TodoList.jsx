import React from 'react';
import Todo from './todo.jsx';

const TodoList = ({todos}) => (
  <ul>
    {todos.map(todo => {
       console.log(todo);
      return <Todo key={todo.id} {...todo} />;
    })}
  </ul>
);

export default TodoList;
