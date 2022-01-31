import { combineReducers } from "redux";
import counterReducer from "./counter-reducer";
import movieReducer from "./movie-reducer";

export default combineReducers({
   counter: counterReducer,
   movies: movieReducer
})