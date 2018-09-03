import React, { Component } from 'react';
import { render } from 'react-dom';
import { TodoItem }from './todoItem'
import { AddItem } from './addItem'

import './css/index.css';

export class TodoComponent extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'},
      {id: 3, content: 'cut the cheese'},
      {id: 5, content: 'walk the dog'},
      {id: 4, content: 'take a nap'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div id="todo-list">
        <h1>Todo's</h1>
        <TodoItem todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddItem addTodo={this.addTodo} />
      </div>
    );
  }
}


render(<TodoComponent />, document.getElementById('todo-wrapper'));
