import { combineReducers } from "redux"
import transactionReducer from "./transaction-reducer"

export default combineReducers({
   transactions: transactionReducer
})

