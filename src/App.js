import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: []
    };
    this.onSubmit = this.onSubmit.bind(this)
    this.addNewItem = this.addNewItem.bind(this)
  }

  onSubmit = (e) => {
    e.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.addNewItem({
        value: newItemValue,
        done: false
      })
    }
    this.refs.itemName.value = ''
  }

  addNewItem = (item) => {
    let arr = this.state.todoList;
    arr.push(item)
    this.setState({todoList: arr});
  }

  render() {
    let items = this.state.todoList
  
    const listItems = items.map((item, index) => (
      <li className="list-group-item " key={index}>
        <div className="">
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true">
            {item.value}
          </span>
          <button type="button" className="mark-done" onClick={this.onClickDone}>&radic;</button>
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>
    ));

    return (
      <div id="main">
        <h1>Todo list</h1>
        <ul className="list-group">
          {listItems}
        </ul>
        <form ref="form" onSubmit={this.onSubmit} className="form-inline">
          <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
          <button type="submit" className="btn btn-primary">Add</button> 
        </form>
      </div>
    );
  }
}

export default App;
