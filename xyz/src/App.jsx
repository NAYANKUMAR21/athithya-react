import { useDispatch, useSelector } from "react-redux";
import { INCAction } from "./redux/actions";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  const handleClick = () => {
    // dispatch({ type: "INC", payload: 10 });
    dispatch(INCAction);
  };

  return (
    <>
      <button onClick={handleClick}>BTN {state}</button>
      <input placeholder="Enter num" type="number" />
    </>
  );
}

export default App;
