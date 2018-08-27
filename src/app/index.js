var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Using React Syntax</h1>
                <p>{this.props.msg}</p>
            </div>
        );
    }
});

ReactDOM.render(<TodoComponent msg="who cut the cheese" />, document.getElementById('todo-wrapper'));
