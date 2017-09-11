import { ADD_TODO,
         SHOW_ALL_TODOS,
         CHANGE_NAME_TEXT
       } from '../constans/constans';

export function addTodo(name) {
  const id = () => Math.random().toString(34).slice(2);
  const todo = {id: id(), name: name};

  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function showAllTodos() {
  const characters = [
    {id: 1, name: 'Leonardo Dicaprio', years: 48, power: 'nen'},
    {id: 2, name: 'kurapika', years: 17, power: 'nen'},
    {id: 3, name: 'gon freecs', years: 13, power: 'nen'},
    {id: 4, name: 'hisoka', years: 30, power: 'nen'},
    {id: 5, name: 'Omar rios', years: 26, power: 'none'},
    {id: 6, name: 'Amin Ogarrio', years: 27, power: 'ki'},
    {id: 7, name: 'Sordo moto', years: 19, power: 'trampas locas'},
    {id: 8, name: 'Seto Amin', years: 29, power: 'Hola a todos árbol'}
  ];

  return {
    type: SHOW_ALL_TODOS,
    todos: characters
  };
}

export function changeNameText (input) {
  return {
    type: CHANGE_NAME_TEXT,
    input: input
  };
};
