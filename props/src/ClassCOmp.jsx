import React, { Component } from 'react';

class ClassCOmp extends Component {
  constructor() {
    super();
    this.state = {
      integer: 0,
    };
  }

  handleClickINC = () => {
    this.setState({ integer: this.state.integer + 1 });
  };
  handleClickDEC = () => {
    this.setState({ integer: this.state.integer - 1 });
  };
  handleClickReset = () => {
    this.setState({ integer: 0 });
  };
  render() {
    console.log();

    return (
      <div>
        {this.state.integer}

        <button onClick={this.handleClickINC}>+</button>
        <button onClick={this.handleClickDEC}>-</button>
        <button onClick={this.handleClickReset}>Reset</button>
      </div>
    );
  }
}

export default ClassCOmp;
