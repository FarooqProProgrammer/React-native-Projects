import { createStore } from "redux";
import locationReducer from "./Reducer/locationReducer";

let store = createStore(locationReducer)
export {
    store
}