import React, { useContext, useReducer } from 'react';
import { AppContext } from './SetupContext';

function reducerFN(state, action) {
  switch (action.type) {
    case 'ADD':
      state = state + action.payload;
      return state;
    case 'SUBTRACT':
      state = {
        ...state,
        count: state.count - action.payload,
      };
      return state;
    default:
      return state;
  }
}

let initCounter = {
  data: [],
  count: 10,
  loading: false,
  error: '',
};
function Z(props) {
  const [state, setState] = useReducer(reducerFN, initCounter);

  const handleDEC = () => {
    setState({ type: 'SUBTRACT', payload: 2 });
  };
  const handleINC = () => {
    setState({ type: 'ADD', payload: 1 });
  };

  return (
    <div>
      {state.count}
      <button onClick={handleINC}>+</button>
      <button onClick={handleDEC}>-</button>{' '}
    </div>
  );
}

export default Z;
