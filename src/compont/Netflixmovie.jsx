import React from "react";
import { Link } from "react-router-dom";

export const Netflixmovie = () => {
  const movies = [
    { movieId: 1, movieName: "Veer-Zaara" },
    { movieId: 2, movieName: "URI" },
    { movieId: 3, movieName: "Don" },
    { movieId: 4, movieName: "PK" },
    { movieId: 5, movieName: "Jab we Met" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Movies</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {movies.map((movie) => (
          <li key={movie.movieId}>
            <Link to={`/watch/${movie.movieName}`}>
              {movie.movieName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
