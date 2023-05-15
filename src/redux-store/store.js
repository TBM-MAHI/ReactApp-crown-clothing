import { legacy_createStore as createStore } from "redux";
import { compose, applyMiddleware } from "redux";
//import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";

let custom_Logger_Middleware = (store) => (next) => (action) => {
    if (!action.type)
        return next(action);
  
    console.log("type :", action.type);
    console.log("payload :", action.payload);
    console.log("Current state :", store.getState());

    next(action);
     console.log("Next state :", store.getState());
};
let middlewares = [custom_Logger_Middleware];

let composedEnhancers = compose(applyMiddleware(...middlewares));
export let store = createStore(rootReducer, undefined, composedEnhancers);
