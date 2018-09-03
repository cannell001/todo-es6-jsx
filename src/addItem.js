import React, { Component } from 'react';

import './css/addItem.css';

//Create TodoItem component
export class AddItem extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <form id="add-todo" onSubmit={this.handleSubmit}>
          <label>Add a new todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
}
}
