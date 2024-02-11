import React from 'react';
import ImageDisplay from './ImageDisplay';

function App() {
  const handleClick = (event) => {
    console.log(event);
  };
  const handleChange = (event) => {
    console.log('InputValue', event.target.value);
  };
  let randomAray = [1, 2, 3, 4];
  let imageUrl =
    'https://media.istockphoto.com/id/479667835/photo/background-elephant.jpg?s=612x612&w=0&k=20&c=DwfinIerTq104FXWcBBwegTWcmw8tf18EGqa5IpEyFk=';
  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Kalvium Gallery</h1>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {/* <div>
          <img src={imageUrl} alt="" />
        </div>
        <div>
          <img src={imageUrl} alt="" />
        </div>
        <div>
          <img src={imageUrl} alt="" />
        </div>
        <div>
          <img src={imageUrl} alt="" />
        </div> */}
        {randomAray.map((ele, index) => {
          return (
            <div key={index} onClick={handleClick} onMouseMove={handleClick}>
              <ImageDisplay ImageLink={imageUrl} Index={index} />;
            </div>
          );
        })}

        <input type="text" onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
