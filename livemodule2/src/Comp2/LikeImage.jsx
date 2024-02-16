import React, { useState } from 'react';
// import wrappedComp from './WrappedComp';
import WrappedComp from './WrappedComp';

function LikeImage(props) {
  return (
    <div>
      <button onClick={props.handleSetState}> Like Image {props.state}</button>
    </div>
  );
}

export default WrappedComp(LikeImage);
