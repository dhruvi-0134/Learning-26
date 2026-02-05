import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">

      {/* Brand */}
      <Link className="navbar-brand" to="/netflixhome">
        Netflix
      </Link>

      {/* Menu (no button, no collapse) */}
      <ul className="navbar-nav flex-row ms-auto">

        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixhome">
            Home
          </Link>
        </li>

        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixshows">
            Shows
          </Link>
        </li>

        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixmovies">
            Movies
          </Link>
        </li>

        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixSong">
         song 
          </Link>
        </li>
        
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixseries">
           Series
          </Link>
        </li>
        
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixtv">
           TV
          </Link>
        </li>
         <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/Team">
         Team
          </Link>
        </li>
      </ul>
    </nav>
  );
};
