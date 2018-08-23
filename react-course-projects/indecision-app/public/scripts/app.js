'use strict';

console.log("App is running!");
// JSX - JavaScript XML 

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        ' This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);
var user = {
    name: 'Gaurav Agnihotri',
    age: 28,
    location: 'New Delhi'
};
var template1 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location : ',
        user.location
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template1, appRoot);
