import React from "react";
import { useParams } from "react-router-dom";
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

export const TeamDetail = () => {
  const { name } = useParams();
const teamImages ={
    gt: GT,
    rcb: RCB,
    mi: MI,
    csk: CSK,
    srh: SRH,
    dc: DC,
    rr: RR,
    pbks: PBKS,
    lsg: LSG,
    kkr: KKR,
   }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Playing {decodeURIComponent(name)} ......</h1>
       <img 
      src={teamImages[name]}
      alt={name}
      style={{ width: "350px",marginTop:"20px"}}>
      </img>
    </div>
  );
};
