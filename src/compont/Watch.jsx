import React from "react";
import { useParams } from "react-router-dom";
import money from "../assets/images/Money.jpg";
import badboy from "../assets/images/badboy.jpg";
import dark from "../assets/images/dark.jpg";
import hit from "../assets/images/hit.jpg";
import search from "../assets/images/search.jpg";
import veer from "../assets/images/Veer.jpg";
import uri from "../assets/images/Uri.jpg";
import don from "../assets/images/Don.jpg";
import pk from "../assets/images/Pk.jpg";
import jab from "../assets/images/Jab.jpg";
export const Watch = () => {
  const { name } = useParams();
  const movieImages ={
    moneyheist:money,
    badboy:badboy,
    dark:dark,
    hit:hit,
    search:search,
    veer:veer,
    don:don,
    uri:uri,
    pk:pk,
    jab:jab 
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Watching... {name}</h1>
      <img 
      src={movieImages[name]}
      alt={name}
      style={{ width: "350px",marginTop:"20px"}}>
      </img>
    </div>
  );
};
