import { combineReducers } from "redux";
import locationReducer from "./Reducer/locationReducer";
import Destination_locationReducer from "./Reducer/DestinationReducer";


const rootReducer = combineReducers({
    Ride:locationReducer,
    Place:Destination_locationReducer
})

export default rootReducer