import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
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
    console.log('Pure Component', this.state.count, this.state.toggle);
    return (
      <div>
        <h2>Pure Component</h2>
        {this.state.count}
        <br />
        <button onClick={this.handleToggle}>Set toggle</button>
        <button onClick={this.handleCounter}>Counter</button>
      </div>
    );
  }
}

export default PureComp;
