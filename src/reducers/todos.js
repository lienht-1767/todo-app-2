import * as types from "./../constants/actionTypes";

const intialState = [{ text: "abc", done: false }, {text: "aaa", done: false}];
const todos = (state = intialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      var todos = [...state, action.data];
      return todos;
    case types.MARK_DONE_TODO:
      var todos = [...state];
      return todos;
    case types.CLOSE_TODO:
      var todos = [...state];
      return todos;
    default:
      return state;
  }
};

export default todos;
