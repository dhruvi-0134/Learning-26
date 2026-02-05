import React from 'react'
import { Link } from 'react-router-dom'

export const Netflixshows = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Netflixshows</h1>
        <ul>
          <li>
            <Link to ="/Watch/moneyhist">Money Heist</Link>
          </li>
           <li>
            <Link to ="/Watch/bedboy">bedboy</Link>
          </li>
           <li>
            <Link to ="/Watch/dark">Dark</Link>
          </li>
           <li>
            <Link to ="/Watch/hit">hit</Link>
          </li>
           <li>
            <Link to ="/Watch/search">search</Link>
          </li>
        </ul>

    </div>
  )
}
