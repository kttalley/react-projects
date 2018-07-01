// const name = 'Josh Perez';
// const element = <h1> Hello, {name}</h1>;

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};


const element = (
    <div>
        <svg width="540" height="540">
            <circle cx = "150" cy = "150" r = "50" fill = "red"/>
        </svg>
        <h1>
            Hello, {formatName(user)}!
        </h1>
    </div>
);


ReactDOM.render(
   <element/>,
   document.getElementById('root')
);