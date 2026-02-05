import React from "react";
import { Link } from "react-router-dom";

export const Team = () => {
  const team = [
    { name: "GUJARAT Titan" },
    { name: "Royal Challengers Bangalore" },
    { name: "Mumbai Indians" },
    { name: "Chennai Super Kings" },
    { name: "Sunrisers Hyderabad" },
    { name: "Delhi Capitals" },
    { name: "Rajasthan Royals" },
    { name: "Punjab Kings" },
    { name: "Lucknow Super Giants" },
    { name: "Kolkata Knight Riders" }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Team Name</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {team.map((t, index) => (
          <li key={index}>
            {/* ✅ path must match App.jsx */}
            <Link to={`/team/${encodeURIComponent(t.name)}`}>
              {t.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
