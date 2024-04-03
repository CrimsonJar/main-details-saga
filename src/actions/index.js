// src/actions/index.js
export function fetchServices() {
  return { type: "FETCH_SERVICES_REQUEST" };
}

export function fetchServiceDetails(id) {
  return { type: "FETCH_SERVICE_DETAILS_REQUEST", payload: id };
}
