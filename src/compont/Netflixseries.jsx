import React from 'react'
import series from "../assets/images/series.jpg"
export const Netflixseries = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Netflixseries</h1>
         <img
                        src={series}
                        alt="Netflix Banner"
                        style={{ width: "500px", marginTop: "40px" }}
                      />
    </div>
  )
}
