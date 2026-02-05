import React from "react";
import { Link } from "react-router-dom";

export const Team = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Team Name</h1>

      <ul>
        <li><Link to="/team/RCB">Royal Challengers Bangalore</Link></li>
        <li><Link to="/team/MI">Mumbai Indians</Link></li>
        <li><Link to="/team/CSK">Chennai Super Kings</Link></li>
        <li><Link to="/team/SRH">Sunrisers Hyderabad</Link></li>
        <li><Link to="/team/DC">Delhi Capitals</Link></li>
        <li><Link to="/team/RR">Rajasthan Royals</Link></li>
        <li><Link to="/team/PBKS">Punjab Kings</Link></li>
        <li><Link to="/team/LSG">Lucknow Super Giants</Link></li>
        <li><Link to="/team/KKR">Kolkata Knight Riders</Link></li>
      </ul>
    </div>
  );
};
