import { decrease, increase } from "./Type";

let initialState = 0;
function reducerFn(state = initialState, action) {
  console.log(action);
  if (action.type == increase) {
    return state + action.payload;
  } else if (action.type == decrease) {
    return state - action.payload;
  }
  return state;
}

export default reducerFn;
