import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todo: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   let listToDo = this.state.todoList;
  //   listToDo.push({text: "to do first", done: false});
  //   listToDo.push({text: "to do seconds", done: false});
  //   this.setState({todoList: listToDo});
  // }

  onSubmit = e => {
    e.preventDefault();
    let todoList = this.state.todoList;
    todoList.push(this.state.todo);
    this.setState({ todoList: todoList });
  };

  render() {
    let items = this.state.todoList;

    return (
      <div id="main">
        <h1>Todo list</h1>
        <form ref="form" onSubmit={this.onSubmit} className="form-inline">
          <input
            type="text"
            ref="itemName"
            className="form-control"
            placeholder="add a new todo..."
            value={this.state.todo}
            onChange={event => {
              this.setState({ todo: event.target.value });
            }}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
        {items.map((item, index) => (
          <li className="list-group-item " key={index}>
            <div className="">
              {item}
              <button type="button" className="mark-done">
                &radic;
              </button>
              <button type="button" className="close">
                &times;
              </button>
            </div>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
