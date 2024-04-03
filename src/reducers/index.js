// src/reducers/index.js
import { combineReducers } from "redux";
import servicesListReducer from "./servicesList";
import serviceDetailsReducer from "./serviceDetails";

const rootReducer = combineReducers({
  servicesList: servicesListReducer,
  serviceDetails: serviceDetailsReducer,
});

export default rootReducer;
