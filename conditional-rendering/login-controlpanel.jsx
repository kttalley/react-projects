function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up. </h1>;
}

//create a greeting component that displays either of
//the two components above depending on whether a user
//is logged in.

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}


//Element variables:
//Use variables to store elements to conditionally
//render parts of a component

function LoginButton(props) {
    return (
        <button onClick = {props.onClick}>
            Login
        </button>
    )    
}
function LogoutButton(props) {
    return (
        <button onClick = {props.onClick}>
            Logout
        </button>
    )    
}
//stateful component that renders one or the other variables above

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <Logoutbutton onClick = {this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick = {this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}


ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);