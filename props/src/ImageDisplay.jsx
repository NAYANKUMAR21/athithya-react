import React from 'react';

const ImageDisplay = (props) => {
  console.log('props', props);
  return (
    <div key={props.Index}>
      <img src={props.ImageLink} alt="" />
    </div>
  );
};

export default ImageDisplay;
