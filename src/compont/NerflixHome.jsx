import React from "react";
import Net from "../assets/images/Net.jpg";

const NetflixHome = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Home</h1>
      <img
        src={Net}
        alt="Netflix Banner"
        style={{ width: "300px", marginTop: "20px" }}
      />
    </div>
  );
};

export default NetflixHome;
