import React, { Component } from "react";

class MyEvenCounter extends Component {
    render() {
        return (

            <div>The number of times evenly clicked is: {this.props.value}</div>

        );
    }
}

export default MyEvenCounter;