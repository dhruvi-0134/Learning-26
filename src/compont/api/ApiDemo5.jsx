import axios from 'axios'
import React, { useState } from 'react'
import { data } from 'react-router-dom'

export const ApiDemo5 = () => {
    const [movies, setmovie]=useState([])
    const[searchTerm,setSearchTerm]= useState("")
    const searchMovie = async ()=>{
        if (!searchTerm.trim()) return;
    const response = await axios.get(`https://www.omdbapi.com/?apikey=482984de&s=${searchTerm.trim()}`)
        console.log(response.data)
        if(response.data.Response ==="True"){
        setmovie(response.data.Search)
    } else{
        setmovie([]);
        alert(response.data.console.error);
        
    }
}
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo5</h1>
        <input 
        type="text"
        placeholder="Enter movie name"
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        style={{
            padding:"8px",
            width:"250px",
            marginRight:"10px"
        }}>
        </input>
        <button onClick={searchMovie}>SEARCH</button>
        <div
             style={{
                display:"grid",
                gridTemplateColumns:"repeat(4,1fr)",
                gap:"20px",
                padding:"20px"
             }}
        >
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
                          }}
                    >
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

                    </div>
                   ) 
                })
            }

        </div>
    </div>
  )
}
