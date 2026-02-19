import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const{id}=useParams();
    const[movie,setmovie]=useState(null);
    useEffect(()=>{
        const getMovieDetail = async () =>{
            const response = await axios.get(`https://www.omdbapi.com/?apikey=482984de&i=${id}`)
            setmovie(response.data);
        }
        getMovieDetail()
    },[id]);
    if(!movie) return <h2>Loading.....</h2>
  return (
    <div style={{textAlign:"center",padding:"20px"}}>
              <h1>{movie.Title}</h1>
              <img
               src={movie.Poster}
               alt={movie.Title}
               style={{ width:"300px"}}
              >
                
              </img>
              <p><b>Year:</b>{movie.Year}</p>
              <p><b>Genre:</b>{movie.Genre}</p>
              <p><b>Director:</b>{movie.Director}</p>
              <p><b>Actors:</b>{movie.Actors}</p>
              <p><b>Plot:</b>{movie.Plot}</p>

    </div>
  )
}
