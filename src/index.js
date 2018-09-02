var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Hello World</h1>
                <h3>ES6 React Syntax</h3>
            </div>

        );
    }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
