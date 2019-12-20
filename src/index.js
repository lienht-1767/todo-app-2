// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

// const store = createStore(rootReducer)
const reduxDevTools =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

let store = createStore(
  rootReducer,
  compose(applyMiddleware(), reduxDevTools)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
