import React, { Component } from "react";

class MyCounterComponent extends Component{
   
    render(){
        return(

            <div>The number of times clicked is: {this.props.value}</div>

        );
    }
}

export default MyCounterComponent;