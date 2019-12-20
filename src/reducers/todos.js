import * as types from './../constants/actionTypes';

const intialState = [
  {text: "Lien 1", done: false},
  {text: "Lien 2", done: false},
  {text: "Lien 3", done: false},
]
const todos = (state = intialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      state.unshift(action.data);
      console.log(state)
      return {
        ...state
      }
    case types.TOGGLE_TODO:
      return {
        ...state
      }
    default:
      return state
  }
}

export default todos
