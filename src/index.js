import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Create a component
export default class TodoComponent extends Component {
	//Custom functions
/*    onDelete(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    }*/
    onDelete = (item) => {
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    }
	constructor(props) {
		super(props);
		this.state = {
            todos: ['drink tea', 'put out garbage', 'walk the dog', 'get a coffee', 'wash the dishes', 'cut the cheese', 'take a nap']
        };
		//this.onDelete = this.onDelete.bind(this);
    }
    //getInitialState
    render(){
		var todos = this.state.todos;
        todos = todos.map((item, index) => {
				return(<TodoItem key={index} item={item} onDelete={this.onDelete}/>);
		});

		return(
            <div id="todo-list">
				<h2>Separate TodoItem Component w/ JSX</h2>
                <p>Output the TodoItems...</p>
				<ul>{todos}</ul>
            </div>
        );
    } //render
}

//Create TodoItem component
class TodoItem extends Component {
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

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
