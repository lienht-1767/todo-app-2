import * as types from './../constants/actionTypes';

export const todos = data => {
  return {
    type: types.ADD_NEW_TODO,
    data
  };
};