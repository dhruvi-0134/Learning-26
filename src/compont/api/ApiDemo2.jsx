import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
  const [users, setusers] = useState([])

  const getUsers = async () => {
    const response = await axios.get("https://dummyjson.com/products")
    console.log(response)

    setusers(response.data.products)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo2</h1>

      <button onClick={getUsers}>GET</button>

      <table
        border="0"
        cellPadding="10"
        style={{
          margin: "20px auto",
          borderCollapse: "collapse",
          border: "2px solid black"
        }}
      >
        <thead>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ borderRight: "1px solid black" }}>ID</th>
            <th style={{ borderRight: "1px solid black" }}>Title</th>
            <th style={{ borderRight: "1px solid black" }}>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return (
                <tr key={user.id} style={{ borderBottom: "1px solid black" }}>
                  <td style={{ borderRight: "1px solid black" }}>{user.id}</td>
                  <td style={{ borderRight: "1px solid black" }}>{user.title}</td>
                  <td style={{ borderRight: "1px solid black" }}>{user.price}</td>
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
