import './App.css';
import Button from './Components/Button';

import { useState } from 'react';

function App() {
  //props vs FN parameetr
  let [state, SetState] = useState(0);

  return (
    <>
      {state}
      <button onClick={function () {}}></button>
    </>
  );
}

export default App;
