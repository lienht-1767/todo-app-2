import React, { Component } from "react";
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({ text: e.target[0].value, done: false});
    e.target[0].value = ''
  }

  render() {
    const { listTodos } = this.props;

    const list = listTodos.map((item, index) => (
      <li className="list-group-item " key={index}>
        <div className={item.done === false ? "undone" : "done"}>
          {item.text}
          <button type="button" className="mark-done" onClick={this.onClickMarkDone} value={index}>
            &radic;
          </button>
          <button type="button" className="close" onClick={this.onClickClose} value={index}>
            &times;
          </button>
        </div>
      </li>
    ));

    return (
      <div id="main">
        <h1>Todo list</h1>
        <form ref="form" className="form-inline" onSubmit={this.onSubmit}>
          <input
            type="text"
            ref="itemName"
            className="form-control"
            placeholder="add a new todo..."
          />
          <button type="submit" className="btn btn-primary" >
            Add
          </button>
        </form>
        {list}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const listTodos = state.todos;
  return {
    listTodos
  };
};

const mapDistachToProps = () => dispatch => {
  return {
    addTodo: data => {
      dispatch(actions.addTodo(data));
    }
  }
};

export default connect(mapStateToProps, mapDistachToProps)(App);
