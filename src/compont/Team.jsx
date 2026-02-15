import React from "react";
import { Link } from "react-router-dom";

import GT from "../assets/images/GT.jpg";
import RCB from "../assets/images/RCB.jpg";
import MI from "../assets/images/MI.jpg";
import CSK from "../assets/images/CSK.jpg";
import SRH from "../assets/images/SRH.jpg";
import DC from "../assets/images/DC.jpg";
import RR from "../assets/images/RR.jpg";
import PBKS from "../assets/images/PBKS.jpg";
import LSG from "../assets/images/LSG.jpg";
import KKR from "../assets/images/KKR.jpg";

export const Team = () => {
  const teams = [
    { name: "Gujarat Titans", image: GT, slug: "gt" },
    { name: "Royal Challengers Bangalore", image: RCB, slug: "rcb" },
    { name: "Mumbai Indians", image: MI, slug: "mi" },
    { name: "Chennai Super Kings", image: CSK, slug: "csk" },
    { name: "Sunrisers Hyderabad", image: SRH, slug: "srh" },
    { name: "Delhi Capitals", image: DC, slug: "dc" },
    { name: "Rajasthan Royals", image: RR, slug: "rr" },
    { name: "Punjab Kings", image: PBKS, slug: "pbks" },
    { name: "Lucknow Super Giants", image: LSG, slug: "lsg" },
    { name: "Kolkata Knight Riders", image: KKR, slug: "kkr" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Team Name</h1>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {teams.map((t, index) => (
          <div key={index} style={{ margin: "15px" }}>
            <Link to={`/team/${t.slug}`}>
              <img
                src={t.image}
                alt={t.name}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              />
            </Link>
            <h4>{t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
  