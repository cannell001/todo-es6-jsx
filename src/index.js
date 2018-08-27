import React from 'react';
import { render } from 'react-dom';

//Create a component using ES6 Class Syntax
export class TodoComponent extends React.Component{
    render(){
        return(
            <h1>Using ES6 Classes</h1>
        );
    }
};

render(
	<TodoComponent/>,
	document.getElementById('todo-wrapper')
)
