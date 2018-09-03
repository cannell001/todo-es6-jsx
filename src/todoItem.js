import React, { Component } from 'react';

import './css/todoItem.css';

export const TodoItem = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        	<div className="item-name todo-item" key={todo.id}>
				<span className="item-name">{todo.content}</span>
				<span className="item-remove" onClick={() => {deleteTodo(todo.id)}}> X </span>
        	</div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}
