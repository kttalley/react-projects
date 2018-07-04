class LoggingButton extends React.Component {
    //this syntax ensures this is bound
    //within handleClick.
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick () {
        console.log('this is:', this);
    }   

    render() {
        return (
            <button onClick = {this.handleClick}>
            Click me.
            </button>
        );
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        //this binding is necessary to make 'this' work
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
            <button onClick = {this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            </div>
        );
    }
}

ReactDOM.render(
    <LoggingButton/>,
    document.getElementById("root")
);