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

ReactDOM.render(
    //toggle changing isLoggedIn = {true / false}:
    <Greeting isLoggedIn={false} />,
document.getElementById('root')
);