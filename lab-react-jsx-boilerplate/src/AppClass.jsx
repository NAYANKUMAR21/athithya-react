import { Component } from 'react';
import './App.css';

export default class AppClass extends Component {
  render() {
    let imageData = this.props.imageDataProp();
    console.log('from class', imageData);

    return (
      <>
        <h1 className="h1">kalvium Gallery Class</h1>
        <div className="grid">
          {imageData.map(function (element, index) {
            return <img src={element.img} alt={index} key={index} />;
          })}
        </div>
      </>
    );
  }
  // code here
}
