import React, { Component } from 'react';

class Rendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 },
      ],
    };
  }

  render() {
    let arrayData = this.state.userData;
    return (
      <div style={{ margin: 'auto' }}>
        {arrayData.map((ele, index) => {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: 'blue',
                border: '2px solid black',
                width: '50%',
              }}
            >
              <div>{ele.id}</div>
              <div>{ele.name}</div>
              <div>{ele.user_type}</div>
            </div>
          );
        })}
        <div>------------------------------------------------------</div>
        {arrayData
          .filter((ele, index) => {
            return ele.user_type == 'Designer';
          })
          .map((ele, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'blue',
                  border: '2px solid black',
                  width: '50%',
                }}
              >
                <div>{ele.id}</div>
                <div>{ele.name}</div>
                <div>{ele.user_type}</div>
              </div>
            );
          })}
        <div>------------------------------------------------------</div>
        {arrayData
          .filter((ele, index) => {
            return ele.name.includes('J');
          })
          .map((ele, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'blue',
                  border: '2px solid black',
                  width: '50%',
                }}
              >
                <div>{ele.id}</div>
                <div>{ele.name}</div>
                <div>{ele.user_type}</div>
              </div>
            );
          })}
        <div>------------------------------------------------------</div>
        {arrayData
          .filter((ele, index) => {
            return ele.age > 28 && ele.age <= 50;
          })
          .map((ele, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'blue',
                  border: '2px solid black',
                  width: '50%',
                }}
              >
                <div>{ele.id}</div>
                <div>{ele.name}</div>
                <div>{ele.user_type}</div>
              </div>
            );
          })}
        <div>------------------------------------------------------</div>
        {arrayData
          .filter((ele, index) => {
            return ele.user_type == 'Designer';
          })
          .reduce((acc, curr) => {
            return acc + curr.years;
          }, 0)}
      </div>
    );
  }
}

export default Rendering;
