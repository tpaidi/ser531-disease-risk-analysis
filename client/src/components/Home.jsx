import React from "react";
import "../styles/home.css";
import HealthForm from "./HealthForm" ;


function Home() {
  return (
    <div className="home">
      <h1 style={{ padding: "25px 0", textAlign: "center" }}>
        Disease Risk Analysis using Ontological Data Modeling
      </h1>
      <div>
        <HealthForm />
      </div>
    </div>
  );

}

export default Home;
