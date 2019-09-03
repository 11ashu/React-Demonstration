var Welcome = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Welcome to react component</h1>
                <p>This is my first welcome component.</p>
            </div>
        )
    }
});

ReactDOM.render(
    <Welcome />,
    document.getElementById('app')
);

