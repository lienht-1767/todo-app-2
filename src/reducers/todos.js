import * as types from './../constants/actionTypes';

const todos = (state = [], action) => {
  console.log(action.type)
  switch (action.type) {
    case types.ADD_NEW_TODO:
      return [
        ...state,
        {
          text: action.text,
          done: false
        }
      ]
    default:
      return state
  }
}

export default todos
