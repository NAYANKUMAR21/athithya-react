import React, { useContext, useState } from 'react';
import X from './X';
import { AppContext } from './SetupContext';

function Hook2Context() {
  const value = useContext(AppContext);
  console.log(value);
  return (
    <div>
      {value.countValue}
      <div>
        <button onClick={value.handleFN}>+</button>
      </div>
    </div>
  );
  //   return <h1>This</h1>;
}

export default Hook2Context;
