import React, { Component } from "react";
import * as actions from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <h1>Todo list</h1>
        <form ref="form" className="form-inline">
          <input
            type="text"
            ref="itemName"
            className="form-control"
            placeholder="add a new todo..."
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default App;
