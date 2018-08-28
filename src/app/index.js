var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cake', 'take a nap']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                    <li>{item}</li>
            );
        });
        return(
            <div id="todo-list">
                <h2>State Part 2 w/ ES6</h2>
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
            </div>
        );
    } //render
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
