import React from "react";
import { Link } from "react-router-dom";

import money from "../assets/images/money.jpg";
import badboy from "../assets/images/badboy.jpg";
import dark from "../assets/images/dark.jpg";
import hit from "../assets/images/hit.jpg";
import search from "../assets/images/search.jpg";

export const Netflixshows = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Shows</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        
        {/* Money Heist */}
        <div>
          <Link to="/watch/moneyheist">
            <img src={money} alt="Money Heist" style={{ width: "150px" }} />
          </Link>
          <br />
          <Link to="/watch/moneyheist">Money Heist</Link>
        </div>

        {/* Bad Boy */}
        <div>
          <Link to="/watch/badboy">
            <img src={badboy} alt="Bad Boy" style={{ width: "150px" }} />
          </Link>
          <br />
          <Link to="/watch/badboy">Bad Boy</Link>
        </div>

        {/* Dark */}
        <div>
          <Link to="/watch/dark">
            <img src={dark} alt="Dark" style={{ width: "150px" }} />
          </Link>
          <br />
          <Link to="/watch/dark">Dark</Link>
        </div>

        {/* Hit */}
        <div>
          <Link to="/watch/hit">
            <img src={hit} alt="Hit" style={{ width: "150px" }} />
          </Link>
          <br />
          <Link to="/watch/hit">Hit</Link>
        </div>

        {/* Search */}
        <div>
          <Link to="/watch/search">
            <img src={search} alt="Search" style={{ width: "150px" }} />
          </Link>
          <br />
          <Link to="/watch/search">Search</Link>
        </div>

      </div>
    </div>
  );
};
