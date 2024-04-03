// src/reducers/serviceDetails.js
const initialState = {
  service: {},
  loading: false,
  error: null,
};

export default function serviceDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SERVICE_DETAILS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SERVICE_DETAILS_SUCCESS":
      return { ...state, service: action.payload, loading: false };
    case "FETCH_SERVICE_DETAILS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
