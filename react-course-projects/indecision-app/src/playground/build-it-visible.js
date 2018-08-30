class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            status: false
        }
    }

    handleToggleVisibility () {
        this.setState( (prevState) => {
            return {
                status: !prevState.status

            };
        });
        console.log('handleToggleVisibility')
    }
    render () {
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.status ? 'Hide details' : 'showDetails'}</button>
            {this.state.status && (
                <div>
                    <p>Hello</p>
                </div>
            )}
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// console.log("App is running!");
// // JSX - JavaScript XML 

// var appRoot = document.getElementById('app')
// let visibility = false;
// const toggleVisibility = () => {
//     visibility = !visibility;
//    render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'showDetails'}</button>
//             {visibility && (
//                 <div>
//                     <p>Hello</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// }
// render();