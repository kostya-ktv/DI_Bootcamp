import { combineReducers } from "redux"
import { robotReducer } from "./robor-reducer"

export default combineReducers({
   robot: robotReducer
})

