import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todo: "",
      done: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    let todoList = this.state.todoList;
    let obj = {todo: this.state.todo, done: this.state.done}

    todoList.push(obj);
    this.setState({ todoList: todoList });
    this.setState({ todo: "", done: false });
  };

  onClickMarkDone = (e) => {
    let todoList = this.state.todoList;
    let index = e.target.value;
    todoList[index].done = todoList[index].done ? false : true
    this.setState({todoList: todoList});
  }

  onClickClose = (e) => {
    let todoList = this.state.todoList
    todoList.splice(e.target.value, 1);
    this.setState({todoList: todoList});
  }

  render() {
    let items = this.state.todoList;

    const listItems = items.map((item, index) => (
      <li className="list-group-item " key={index}>
        <div className={item.done === false ? "undone" : "done"}>
          {item.todo}
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
        <form ref="form" onSubmit={this.onSubmit} className="form-inline">
          <input
            type="text"
            ref="itemName"
            className="form-control"
            placeholder="add a new todo..."
            value={this.state.todo}
            onChange={event => {
              this.setState({ todo: event.target.value, done: false });
            }}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
        {listItems}
      </div>
    );
  }
}

export default App;
