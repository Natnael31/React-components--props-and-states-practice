import React, { Component } from "react";
import MyCounterComponent from "../MyCounterComponent";
import MyEvenCounter from "../MyEvenCounter";

class ClassStateExample extends Component {
  constructor() {
    super();
    this.state = {
     
      count: 0,
      clicked :0,
      count1:0,

    };
  }

  increment = ()=> {
    
    this.setState({count: this.state.count+1});

    if (this.state.count % 2 == 0) {
      
      this.state.count1 = this.state.count;
        
    } else{
      this.state.count1 = this.state.count+1;
    }
}

  render() {
    return (
      <div>
        <button onClick={this.increment} > Click me </button>
        <MyCounterComponent value = {this.state.count }> </MyCounterComponent>
        <MyEvenCounter value = {this.state.count1}> </MyEvenCounter>
    
        
      </div>
    );
  }
}

export default ClassStateExample;
