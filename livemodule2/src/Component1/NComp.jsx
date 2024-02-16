import React, { Component } from 'react';
import PureComp from './PureComp';

class NComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: false,
    };
  }

  handleCounter = () => {
    if (this.state.toggle == true) {
      this.setState({ ...this.state, count: this.state.count + 1 });
    }
  };
  handleToggle = () => {
    this.setState({ ...this.state, toggle: !this.state.toggle });
  };
  render() {
    console.log('Normal Component', this.state.count, this.state.toggle);
    return (
      <div>
        <h2>Normal Component</h2>
        {this.state.count}
        <br />
        <button onClick={this.handleToggle}>Set toggle</button>
        <button onClick={this.handleCounter}>Counter</button>
      </div>
    );
  }
}

export default NComp;
