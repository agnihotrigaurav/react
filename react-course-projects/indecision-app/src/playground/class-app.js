class IndecissionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    handleDeleteOptions () {
        this.setState(() => {
            return {
                options: []
            };
        });
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

        this.setState((prevState) =>{
            return {
                options: prevState.options.concat([option])
            }
        });
    }

    render(){
        const title = 'IndecissionApp';
        const subtitel = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitel = {subtitel} />
                <Action handlePick={this.handlePick} hasOptions={this.state.options.length >  0} />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
class Header extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitel}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    render(){
        return (
            <div>
             <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
             >What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
            {
                this.props.options.map((option) => {
                    return <Option key={option} optionText={option}/>
                })
            } 
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
               <p>{this.props.optionText}</p>
            </div>
        );
    }
}

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
        const val = e.target.elements.options.value.trim();
        console.log(val);
        const error = this.props.handleAddOption(val)
        console.log(error);
        this.setState(() => {
            return { error };
        });

    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="test" name="options"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecissionApp />, document.getElementById('app'));