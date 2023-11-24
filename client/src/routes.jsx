import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Analysis  from "./components/Analytics";
import { BrowserRouter as Router } from "react-router-dom";

const RouteConfigurations = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analysis />} />
      </Routes>
    </Router>
  );
};

export default RouteConfigurations;
