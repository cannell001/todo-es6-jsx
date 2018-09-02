import React, { Component } from 'react';

import './css/todoItem.css';

//Create TodoItem component
export class TodoItem extends Component {
	render(){
		return(
			<li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
					<span className="item-remove" onClick={this.handleDelete.bind(this)}> x </span>
                </div>
            </li>
		);
	}

	//Custom functions
    handleDelete(){
        this.props.onDelete(this.props.item);
    }
}
