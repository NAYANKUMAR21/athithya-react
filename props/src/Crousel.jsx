import React, { Component } from 'react';
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
let imageData = [first, second, third];

class Crousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }
  handleCLickINCIndex = () => {
    if (this.state.index == 2) {
      return this.setState({ index: 0 });
    }
    return this.setState({ index: this.state.index + 1 });
  };
  handleCLickDECIndex = () => {
    if (this.state.index == 0) {
      return this.setState({ index: 2 });
    }
    return this.setState({ index: this.state.index - 1 });
  };

  render() {
    let singleImage = imageData[this.state.index];
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <button onClick={this.handleCLickDECIndex}> 👈🏻 </button>
        </div>
        <img src={singleImage} alt="" />
        <div>
          <button onClick={this.handleCLickINCIndex}> ⏩ </button>
        </div>
      </div>
    );
  }
}

export default Crousel;
