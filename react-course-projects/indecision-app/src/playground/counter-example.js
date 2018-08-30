
class Counter extends React.Component {
    constructor (props) { 
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAddOne () {
        this.setState( (prevState) => {
            return {
                count: prevState.count +1

            };
        });
        console.log('handleAddOne');
    }
    handleMinusOne() {
        this.setState( (prevState) => {
            return {
                count: prevState.count -1

            };
        });
        console.log('handleMinusOne');
    }

    handleReset() {
        this.setState( () => {
            return {
                count: 0

            };
        });
        console.log('handleReset');
    }
    render () {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}> +1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// console.log("App is running!");
// // JSX - JavaScript XML 


// const user = {
//     name: 'Gaurav Agnihotri',
//     age: 28,
//     location: 'New Delhi'
// };
// const template1 = (
//     <div>
//         <h1>{user.name}</h1>
//         <p>Age: {user.age}</p>
//         <p>Location : {user.location}</p>
//     </div>
// );
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// var appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>RESET</button>
//         </div>
//     );
//     console.log(template2);
//     ReactDOM.render(template2, appRoot)    
// };
// renderCounterApp();
