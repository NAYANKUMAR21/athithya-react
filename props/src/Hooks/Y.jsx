import React, { useContext, useReducer, useRef } from 'react';
import Z from './Z';
import { AppContext } from './SetupContext';

function reducerFN(state, action) {
  if (action.type == 'ADD_TEXT') {
    state = [...state, { text: action.payload, ishidden: true }];
    return state;
  } else if (action.type === 'CHANGE_THE_ARRAY') {
    return [...action.payload];
  }
}

let initialData = [];
function Y() {
  const [state, dispatch] = useReducer(reducerFN, initialData);

  const value = useRef('input');

  const refNew = useRef(null);
  console.log(value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: 'ADD_TEXT', payload: e.target.value });
    }
  };
  const handleMakeVisible = (id) => {
    state[id].ishidden = !state[id].ishidden;

    dispatch({ type: 'CHANGE_THE_ARRAY', payload: state });
  };
  console.log(state);
  return (
    <h1>
      <button ref={refNew} style={{ border: '1px solid black' }}>
        Y here
      </button>
      <div>
        <input type="text" onKeyDown={handleKeyDown} ref={value} alt="" />
      </div>
      <div>
        {state.map((ele, index) => {
          return index == 2 ? (
            <div key={index}>
              <div>{ele.ishidden == true ? ele.text : 'Text is Hidden'}</div>
              <button onClick={() => handleMakeVisible(index)}>Toggle</button>
            </div>
          ) : (
            <div key={index}>
              <div>{ele.ishidden == true ? ele.text : 'Text is Hidden'}</div>
              <button onClick={() => handleMakeVisible(index)}>Toggle</button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          value.current.focus();
        }}
      >
        Get me to the top
      </button>
      <button
        onClick={() => {
          return refNew.current.focus();
        }}
      >
        take me 2
      </button>
    </h1>
  );
}

export default Y;
