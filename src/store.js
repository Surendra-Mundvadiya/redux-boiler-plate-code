import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import sagas from "./sagas";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage,
    debug: true,
    whitelist: [""],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

// define middlewares
const middlewares = [];

// create and add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

//add the freeze and logger dev middleware
if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
}

// apply the middleware
const middleware = composeWithDevTools(applyMiddleware(...middlewares));

const Store = () => {
    const store = createStore(persistedReducers, undefined, middleware);
    const persistor = persistStore(store);
    sagaMiddleware.run(sagas);
    return { store, persistor };
};
export default Store;
