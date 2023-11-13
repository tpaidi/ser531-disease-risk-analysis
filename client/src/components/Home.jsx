import React from "react";
import  '../styles/home.css'
function Home() {
  return (
    <div className="home">
      <h1 style={{ padding : "25px 0",textAlign: "center"}} >Disease Risk Analysis using Ontological Data Modeling</h1>      
      <div className="button-container">
        <button>Alzheimers</button>
        <button>Covid</button>
        <button>Cardiovascular Diseases</button>
      </div>
    </div>
  );
}

export default Home;
