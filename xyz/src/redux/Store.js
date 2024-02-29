import { legacy_createStore } from "redux";
import reducerFn from "./Reducer";

export const store = legacy_createStore(reducerFn);
