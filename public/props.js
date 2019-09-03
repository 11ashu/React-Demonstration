var Welcome = React.createClass({
    getDefaultProps: function () {  // set by default property through this function
        return {
            city: 'Azamgarh',
            state: 'UP'
        }
    },
    render: function () {
        var cityName = this.props.city;
        var stateName = this.props.state;
        return (
            <div>
                <h1>Welcome to {cityName} and {stateName}</h1>
                <p>This is my first welcome component.</p>
            </div>
        )
    }
});

ReactDOM.render(
    // <Welcome city="Delhi" state="MAH" />,  // when we want to pass property from here
    <Welcome />,
    document.getElementById('app')
);

