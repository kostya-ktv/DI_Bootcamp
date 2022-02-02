import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root-reducer";
import { printLog } from "../components/middleware/printLog";

export const store = createStore(rootReducer, applyMiddleware(printLog))