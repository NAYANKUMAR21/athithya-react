import { useState } from 'react';
import ValueCount from './Components/ValueCount';
import Btn from './Components/Btn';

function App() {
  let [value, functionSetValue] = useState(0);

  console.log(value);
  console.log(functionSetValue);

  //btn inc = 0->1 (value=1)
  //btn dec = 1->0 (value =0)

  return (
    <>
      <ValueCount count={value} />
      <Btn
        btnText={'Increase'}
        Fn={function () {
          functionSetValue(value + 1);
        }}
      />
      <Btn
        Fn={function () {
          functionSetValue(value - 1);
        }}
        btnText={'Decrease'}
      />
    </>
  );
}

export default App;

//create react app 3 ways
//starting UI file -> app.jsx
// starting file for entire project-> main.jsx
//components (functional UI code)
//props
//state [useState()]
//revise props
// HTML 30 lines
