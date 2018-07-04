// {/* <button onClick={activateLasers}>
//     Activate Lasers
// </button> */}


// function ActionLink() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('The link was clicked.')
//     }

//     render() {
//         return (
//             <div>
//             <a href = "#" onClick = {handleClick}>
//                 Click me
//             </a>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <ActionLink/>
//     document.getElementById('root')
// );


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
    <Toggle />,
    document.getElementById('root')
);