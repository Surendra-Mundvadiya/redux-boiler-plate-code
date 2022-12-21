import { call, put } from "redux-saga/effects";
import constants from "../constants";
import Counter from "../api/counter";

export function* increment(action) {
    yield load("increment");
    const response = yield call(Counter.increment, action.payload);
    if (response !== null && response !== undefined && !isNaN(response)) {
        yield put({
            type: constants("counter").reducers.increment.success,
            payload: response,
        });
        yield unload("increment");
    } else {
        yield error("increment", response, null);
        yield unload("increment");
    }
}
export function* decrement(action) {
    yield load("decrement");
    const response = yield call(Counter.decrement, action.payload);
    if (response !== null && response !== undefined && !isNaN(response)) {
        yield put({
            type: constants("counter").reducers.decrement.success,
            payload: response,
        });
        yield unload("decrement");
    } else {
        yield error("decrement", response, null);
        yield unload("decrement");
    }
}
function* error(type, response, message) {
    let status = 0;
    if (response) status = response.status || 0;
    yield put({
        type: constants("counter").reducers[type].error,
        payload: {
            status: status,
            message: response.message || "We ran into some issues and are looking into it. ",
        },
    });
}

function* load(type) {
    yield put({
        type: constants("counter").reducers[type].load,
    });
}

function* unload(type) {
    yield put({
        type: constants("counter").reducers[type].unload,
    });
}
