console.log("App is running!");
// JSX - JavaScript XML 


const app = {
    title: 'Indecission App',
    subtitle: 'Put your life in hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submited')
    const option = e.target.elements.options.value;
    if (option) {
        app.options.push(option)
        e.target.elements.options.value = '';
        renderForm();
        console.log(option)
    }
    
}


var appRoot = document.getElementById('app')

const removeAllOptions = () => {
    app.options = [];
    renderForm();
}

const onMakeDecission = () => {
    const randomNumber = Math.floor(Math.random * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
}
const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
        
            <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecission}>What should i do next?</button>
            <button onClick={removeAllOptions}>Remove</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="test" name="options"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}
renderForm();