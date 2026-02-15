import React from 'react'
import song from"../assets/images/Song.jpg"
export const NetflixSong = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixSong</h1>
        <img
                src={song}
                alt="Netflix Banner"
                style={{ width: "300px", marginTop: "20px" }}
              />
    </div>
  )
}
