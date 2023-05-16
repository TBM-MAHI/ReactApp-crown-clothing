import { rootReducer } from "./root-reducer";
import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from 'redux-persist'
import thunk from "redux-thunk";
import storage  from "redux-persist/lib/storage";

/* let custom_Logger_Middleware = (store) => (next) => (action) => {
    if (!action.type)
        return next(action);
  
    console.log("type :", action.type);
    console.log("payload :", action.payload);
    console.log("Current state :", store.getState());

    next(action);
     console.log("Next state :", store.getState());
}; */
let middlewares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);

let composedEnhancers = compose(applyMiddleware(...middlewares));

const persist_Config = {
    key: 'root',
    storage,
    whitelist: [ 'cart' ],
}

const persisted_Reducer = persistReducer(persist_Config, rootReducer);

export let store = createStore(persisted_Reducer, undefined, composedEnhancers);

export let persistor = persistStore(store); 