class IndecissionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount () {
        try {

        
        console.log('HIBI')
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options) {
        this.setState(() => ({options}))
        }
        }catch(e) {

        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('componentDidUpdate');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

        }
    }

    componentWillUnmount (prevProps, prevState) {
        console.log('HIBI11111');
    }
    handleDeleteOptions () {
        this.setState(() => ({options: []}));
    }
    handleDeleteOption (optionToRemove) {
        
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove!== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption (option) {
        if(!option) {
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        } 

        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    render(){

        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action handlePick={this.handlePick} hasOptions={this.state.options.length >  0} />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
IndecissionApp.defaultProps = {
    options: []
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecission'
};
const Action = (props) => {
        return (
            <div>
             <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
             >What should I do?</button>
            </div>
        );
    
}

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Please Add some opions</p>}
            <button onClick={props.handleDeleteOptions}>RemoveAll</button>
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            } 
        </div>
    );
}
const Option = (props) => {
    return (
        <div>
           {props.optionText}
            <button 
                onClick= {(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            errror: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const val = e.target.elements.option.value.trim();
        console.log(val);
        const error = this.props.handleAddOption(val)
        console.log(error);
        this.setState(() => ({error}));
        if(!error) {
            e.target.elements.option.value = '';
        }

    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="test" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecissionApp />, document.getElementById('app'));