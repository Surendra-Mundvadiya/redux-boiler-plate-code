import { takeLatest } from "redux-saga/effects";
import { decrement, increment } from "./counter";
import constants from "../constants";
function* sagas() {
    yield takeLatest(constants("counter").sagas.increment, increment);
    yield takeLatest(constants("counter").sagas.decrement, decrement);
}

export default sagas;
