// src/sagas/serviceDetailsSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchServiceDetailsSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `http://localhost:7070/api/services/${action.payload}`
    );
    yield put({
      type: "FETCH_SERVICE_DETAILS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: "FETCH_SERVICE_DETAILS_FAILURE",
      payload: error.message,
    });
  }
}

export function* watchFetchServiceDetails() {
  yield takeEvery("FETCH_SERVICE_DETAILS_REQUEST", fetchServiceDetailsSaga);
}
