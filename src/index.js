import React, { Component } from 'react';
import { render } from 'react-dom';


//Create a component using ES6 Class Syntax
export class TodoComponent extends Component{
    render(){
        return(
            <div>
                <p><strong>Cheese name: </strong> {this.props.cheese.name}</p>
                <p><strong>Cheese smell factor: </strong> {this.props.cheese.smellFactor}</p>
                <p><strong>Cheese price: </strong>£{this.props.cheese.price}</p>
            </div>
        )
    }
}

var myCheese = {name: 'Gorgonzola', smellFactor: 'Extreme pong', price: 3.50 };

render(
	<TodoComponent cheese={myCheese}/>,
	document.getElementById('todo-wrapper')
)
