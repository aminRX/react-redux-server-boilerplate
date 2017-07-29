const initialState = {
  counter: 0
}

function counterApp(state, action) {
  if (typeof state === "undefined") {
    return initualState;
  }

  switch(action.type) {
    case "Add":
      return Object.assing({}, state, { counter: counter + 1 });
    default:
      return state;
  }
}

export default counterApp;
