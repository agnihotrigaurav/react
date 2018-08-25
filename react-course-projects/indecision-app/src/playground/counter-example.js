console.log("App is running!");
// JSX - JavaScript XML 


const user = {
    name: 'Gaurav Agnihotri',
    age: 28,
    location: 'New Delhi'
};
const template1 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location : {user.location}</p>
    </div>
);
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}

var appRoot = document.getElementById('app')

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>RESET</button>
        </div>
    );
    console.log(template2);
    ReactDOM.render(template2, appRoot)    
};
renderCounterApp();
