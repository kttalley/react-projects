class Clock extends React.Component {
    constructor(props) {    //pass in an object with properties
        super(props);   //make the passed in object a parent of this class
        this.state = {date: new Date() }; //state instantiates a new instance.
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);