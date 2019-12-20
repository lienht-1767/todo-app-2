import * as types from "./../constants/actionTypes";

const intialState = [{ text: "abc", done: false }];
const todos = (state = intialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      var todos = [...state, action.data];
      return todos;
    case types.TOGGLE_TODO:
      var todos = [...state];
      return todos;
    default:
      return state;
  }
};

export default todos;
