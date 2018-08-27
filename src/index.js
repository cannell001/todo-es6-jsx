import React from 'react';
import { render } from 'react-dom';

//Create a component using ES6 Class Syntax
export class TodoComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>Using ES6 Classes with props</h1>
                <p>{this.props.msg}</p>
            </div>
        );
    }
};

render(
	<TodoComponent msg="who cut the cheese"/>,
	document.getElementById('todo-wrapper')
)
