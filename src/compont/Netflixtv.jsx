import React from 'react'
import Tv from"../assets/images/Tv.jpg"
export const Netflixtv = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1> Netflix TV</h1>
        <img
                        src={Tv}
                        alt="Netflix Banner"
                        style={{ width: "500px", marginTop: "40px" }}
                      />
    </div>
  )
}
