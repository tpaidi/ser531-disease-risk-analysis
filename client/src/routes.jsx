import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";

const RouteConfigurations = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouteConfigurations;
