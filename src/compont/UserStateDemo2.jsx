import React, { useState } from 'react'

export const UserStateDemo2 = () => {
    const[loading,setLoading]=useState(true)
    const stopLoader =()=>{
        setLoading(false)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1> USERSTATEDEMO2</h1>
        {
            loading == true && <h1>Loading.....</h1>
        }
        <button onClick={stopLoader}>STOP</button>

    </div>
  )
}
