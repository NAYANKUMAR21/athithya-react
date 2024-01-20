import { Component } from 'react';
import './App.css';
import elephant from './images/elephant.jpeg';
import App from './App';

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };

  // code here
  render() {
    let array = this.imageData();
    console.log(array);
    return (
      <div>
        <h3 style={{ textAlign: 'center' }}>
          kalvium gallery using class component
        </h3>

        <div className="grid-div">
          {array.map(function (elemnt, index) {
            return (
              <div>
                <img src={elemnt.img} alt={elemnt.id} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
