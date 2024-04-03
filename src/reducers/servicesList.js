// src/reducers/servicesList.js
const initialState = {
  services: [],
  loading: false,
  error: null
};

export default function servicesListReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SERVICES_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_SERVICES_SUCCESS':
      return { ...state, services: action.payload, loading: false };
    case 'FETCH_SERVICES_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}