import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root-reducer";
import logger from 'redux-logger';

export const store = createStore(rootReducer, applyMiddleware(logger));