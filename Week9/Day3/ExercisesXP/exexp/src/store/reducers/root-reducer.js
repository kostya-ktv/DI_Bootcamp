import { combineReducers } from "redux";
import ageCounterReducer from "./ageCounter-reducer";
import digitCountReducer from "./digCounter-reducer";


export default combineReducers({
   ageReducer: ageCounterReducer,
   digitReducer: digitCountReducer
})