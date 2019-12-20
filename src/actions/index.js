import * as types from "./../constants/actionTypes";

export const addTodo = data => {
  return {
    type: types.ADD_NEW_TODO,
    data
  };
};

export const closeTodo = data => {
  return {
    type: types.CLOSE_TODO,
    data
  };
};

export const markDone = data => {
  return {
    type: types.MARK_DONE_TODO,
    data
  };
};
