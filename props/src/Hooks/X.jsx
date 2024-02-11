import React, { useContext } from 'react';
import Y from './Y';
import { AppContext } from './SetupContext';

function X(props) {
  const value = useContext(AppContext);

  return (
    <div>
      X {value.valueToBeRead}
      <Y />
    </div>
  );
}

export default X;
