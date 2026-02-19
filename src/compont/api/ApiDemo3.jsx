import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo3 = () => {
    const [movies, setmovie] = useState([])

    const searchMovie = async () => {
        const response = await axios.get(
            'https://www.omdbapi.com/?apikey=482984de&s=stranger%20things'
        )

        console.log(response.data)

        setmovie(response.data.Search)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>APIDEMO3</h1>

            <button onClick={searchMovie}>SEARCH</button>

            {/* GRID LAYOUT */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "20px",
                    padding: "20px"
                }}
            >
                {
                    movies && movies.map((movie, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    border: "1px solid black",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    boxShadow: "0px 2px 5px gray"
                                }}
                            >
                                <h3>{movie.Title}</h3>

                                <p><b>IMDB ID:</b> {movie.imdbID}</p>

                                <p><b>Year:</b> {movie.Year}</p>

                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    style={{
                                        height: "200px",
                                        width: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
