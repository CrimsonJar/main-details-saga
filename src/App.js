// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicesList from "./ServicesList";
import ServiceDetails from "./ServiceDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/:id/details' element={<ServiceDetails />} />
        <Route path='/' element={<ServicesList />} />
      </Routes>
    </Router>
  );
}

export default App;
