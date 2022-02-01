import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/root-reducer";
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(logger, thunk))