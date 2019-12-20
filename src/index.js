// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "../src/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
