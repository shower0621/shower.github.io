'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var restaurants = require('json!./restaurants.json');
var CommentBox = React.createClass({
    render: function (restaurants) {
        return  (
            <div className = "CommentBox">
                <h1>阿你要吃什麼</h1>
                {/*<h2>{this.props.restaurant}</h2>*/}
                <RefreshBtn restaurant = {this.props.restaurant}/>
            </div>
        );
    }
});

var RefreshBtn = React.createClass({
    getInitialState: function() {
            this.len = Object.keys(restaurants).length;
            return {index : Math.floor(Math.random()*(this.len))};
    },
    handleClick: function(event) {
            this.setState({index:  Math.floor(Math.random()*(this.len))});
    },
    render: function() {
        return (
            <div>
                <h2>{this.props.restaurant[this.state.index]} </h2>
                <p onClick={this.handleClick}>
                    Refresh!
                </p>
            </div>
        );
    }
});

ReactDOM.render (
        <CommentBox restaurant = {restaurants} />,
        document.getElementById('content')
);
