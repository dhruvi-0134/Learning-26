import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ApiDemo4 = () => {
    const [movies,setmovie]= useState([])
    const navigate = useNavigate();
    const searchMovie = async () => {
        const response = await axios.get('https://www.omdbapi.com/?apikey=482984de&s=avengers')
        console.log(response.data)
        setmovie(response.data.Search)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo4</h1>
        <button onClick={searchMovie}>SEARCH</button>
        <div 
            style={{
                display:"grid",
                gridTemplateColumns:"repeat(4,1fr)",
                gap:"20px",
                padding:"20px"
            }}>
         {
            movies && movies.map((movie,index)=>{
                return(
                    <div 
                       key={index}
                       style={{
                        border:"1px solid black",
                        padding:"10px",
                        borderRadius:"10px",
                        boxShadow:"0px 2px 5px gray"
                       }}>
                 <h3>{movie.Title}</h3>
                 <p><b>IMDB ID:</b>{movie.imdbID}</p>
                 <p><b>Year:</b>{movie.Year}</p>
                 <img
                      src={movie.Poster}
                      alt={movie.Title}
                      style={{
                        height:"200px",
                        width:"100%",
                        objectFit:"cover"
                      }}
                 >
                 </img>
                 <button 
                     onClick={()=>navigate(`/moviedetail/${movie.imdbID}`)}
                     style={{
                        marginTop:"10px",
                        padding:"5px 10px",
                        cursor: "pointer"
                     }}>
                        view Detail

                 </button>
                    </div>
                )
            })
         }
        </div>
    </div>
  )
}
