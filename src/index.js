import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Create a component
export default class TodoComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
            todos: ['wash the dishes', 'cut the cheese', 'take a nap']
        };
    }
    //getInitialState
    render(){
        return(
            <div id="todo-list">
				<h2>State with JSX</h2>
                <p>React stuff goes here...</p>
				<ul>
					<li>{this.state.todos[0]}</li>
					<li>{this.state.todos[1]}</li>
					<li>{this.state.todos[2]}</li>
				</ul>
            </div>
        );
    } //render
}

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
