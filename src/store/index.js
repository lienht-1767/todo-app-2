import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";
const reduxDevTools =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

let store = createStore(rootReducer, compose(applyMiddleware(), reduxDevTools));
export default store;
