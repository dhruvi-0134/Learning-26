import React from "react";
import { Link } from "react-router-dom";

import veer from "../assets/images/Veer.jpg";
import uri from "../assets/images/Uri.jpg";
import don from "../assets/images/Don.jpg";
import pk from "../assets/images/Pk.jpg";
import jab from "../assets/images/Jab.jpg";

export const Netflixmovie = () => {
  const movies = [
    { id: 1, name: "Veer-Zaara", image: veer, slug: "veer" },
    { id: 2, name: "URI", image: uri, slug: "uri" },
    { id: 3, name: "Don", image: don, slug: "don" },
    { id: 4, name: "PK", image: pk, slug: "pk" },
    { id: 5, name: "Jab We Met", image: jab, slug: "jab" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Movies</h1>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: "20px" }}>
            <Link to={`/watch/${movie.slug}`}>
              <img
                src={movie.image}
                alt={movie.name}
                style={{
                  width: "200px",
                  height: "300px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              />
            </Link>
            <h3>{movie.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
