import React, { useState } from 'react'

export const UserStateDemo1 = () => {
    const[count,setCount]=useState(0)
    const increseCount =()=>{
        setCount(count+1)
        console.log('count after increse',count)

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UserStateDemo1</h1>
        <h1>Count ={count}</h1>
        <button onClick={increseCount}>+</button>
    </div>
  )
}
