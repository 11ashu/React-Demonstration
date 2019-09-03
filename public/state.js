var Welcome = React.createClass({
    getDefaultProps: function () {  // set by default property through this function
        return {
            city: 'Azamgarh',
            state: 'UP'
        }
    },
    // step - 1
    getInitialState: function () {
        return {
            city: this.props.city
        }
    },
    touchMe: function (e) {
        e.preventDefault();
        var city = this.refs.city.value;
        // alert("I'm in" + city);
        // step - 2
        this.setState({
            city: city
        })
    },
    render: function () {
        // step - 3
        var cityName = this.state.city;
        var stateName = this.props.state;
        return (
            <div>
                <h1>Welcome to {cityName} and {stateName}</h1>
                <p>This is my first welcome component.</p>
                <form onSubmit={this.touchMe}>
                    <label>City</label>
                    <input type="text" ref="city" />
                    <button>Touch Me</button>
                </form>
            </div>
        )
    }
});

ReactDOM.render(
    // <Welcome city="Delhi" state="MAH" />,  // when we want to pass property from here
    <Welcome />,
    document.getElementById('app')
);


