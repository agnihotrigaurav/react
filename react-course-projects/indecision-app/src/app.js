console.log("App is running!");
// JSX - JavaScript XML 

var template = (
    <div>
        <h1>Indecision App</h1>
        <p> This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
var user = {
    name: 'Gaurav Agnihotri',
    age: 28,
    location: 'New Delhi'
};
var template1 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location : {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app')
ReactDOM.render(template1, appRoot)