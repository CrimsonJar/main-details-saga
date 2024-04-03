// src/sagas/index.js
import { all } from "redux-saga/effects";
import { watchFetchServices } from "./servicesListSaga";
import { watchFetchServiceDetails } from "./serviceDetailsSaga";

export default function* rootSaga() {
  yield all([watchFetchServices(), watchFetchServiceDetails()]);
}
