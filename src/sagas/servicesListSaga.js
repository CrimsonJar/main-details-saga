// src/sagas/servicesListSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchServicesSaga() {
  try {
    const response = yield call(
      axios.get,
      "http://localhost:7070/api/services"
    );
    yield put({ type: "FETCH_SERVICES_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_SERVICES_FAILURE", payload: error.message });
  }
}

export function* watchFetchServices() {
  yield takeEvery("FETCH_SERVICES_REQUEST", fetchServicesSaga);
}
