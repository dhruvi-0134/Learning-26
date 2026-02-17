import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
  const[message,setmessage] =useState("")
  const[users,setusers]= useState([])
  const getUsers =async()=>{
    const response = await axios.get("https://node5.onrender.com/user/user/")
    console.log(response)
    console.log(response.data)
    console.log(response.data.message)
    setmessage(response.data.message)
    console.log(response.data.data)
    setusers(response.data.data)
    get()
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>ApiDemo1</h1>
      <button onClick={()=>{getUsers()}}>GET</button>
      <h2>MESSAGE ={message}</h2>
      <table border="1"cellPadding="10" style={{margin:"20px auto"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>Email</th>
          </tr>
        </thead>
         <tbody>
          {
            users.map((user,index)=>{
              return(
                <tr key={index}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })
          }
         </tbody>
      </table>
    </div>
  )
}
