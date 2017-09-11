import { SET_VISIBILITY_FILTER,
         SHOW_ALL_TODOS
       } from '../constans/constans';

const setVisibilityFilter = (state = SHOW_ALL_TODOS, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
      return state;
    default:
      return state;
  }
};

export default setVisibilityFilter;
