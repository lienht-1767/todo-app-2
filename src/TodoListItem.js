import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose =() => {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone = () => {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render () {
    var todoClass = this.props.item.done ? 
        "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true">
            {this.props.item.value}
          </span>
          <button type="button" className="mark-done" onClick={this.onClickDone}>&radic;</button>
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
