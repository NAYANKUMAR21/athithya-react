import React, { useState } from 'react';

const KalviumNote = () => {
  const [state, setState] = useState('');
  const handleChange = (event) => {
    setState((prev) => event.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
      }}
    >
      <textarea
        name="text1"
        id=""
        cols="50"
        rows="20"
        onChange={handleChange}
      ></textarea>
      <textarea name="text2" id="" cols="50" rows="20" value={state}></textarea>
    </div>
  );
};

export default KalviumNote;
