console.log("App is running!");
// JSX - JavaScript XML 

var appRoot = document.getElementById('app')
let visibility = false;
const toggleVisibility = () => {
    visibility = !visibility;
   render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'showDetails'}</button>
            {visibility && (
                <div>
                    <p>Hello</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot)
}
render();