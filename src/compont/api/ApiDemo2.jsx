import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
  const [users, setusers] = useState([])

  const getUsers = async () => {
    const response = await axios.get("https://dummyjson.com/products")
    console.log(response)

    setusers(response.data.products)   // ✅ correct
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo2</h1>

      <button onClick={getUsers}>GET</button>

      <table border="1" cellPadding="10" style={{margin:"20px auto"}}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
           {
            users.map((user)=>{
                return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.price}</td>
                        <td>{user.category}</td>

                    </tr>
                )
            })
           } 
        </tbody>

      </table>
    </div>
  )
}
