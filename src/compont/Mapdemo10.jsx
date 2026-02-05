import React from 'react';

// image imports (MATCH EXACT FILE NAMES)
import virat_kohli from "../assets/images/virat_kohli.jpg";
import rohit from "../assets/images/rohit_sharma.jpg";
import msdhoni from "../assets/images/ms_dhoni.webp";
import ab from "../assets/images/ab.webp";
import joe from "../assets/images/joe.webp";
import kane from "../assets/images/kane.webp";

export const Mapdemo10 = () => {

  var players = [
    { id: 1, name: "Virat Kohli", country: "India", role: "Batsman", img: virat_kohli },
    { id: 2, name: "Rohit Sharma", country: "India", role: "Batsman", img: rohit },
    { id: 3, name: "MS Dhoni", country: "India", role: "Wicket Keeper", img: msdhoni },
    { id: 4, name: "AB de Villiers", country: "South Africa", role: "Batsman", img: ab },
    { id: 5, name: "Joe Root", country: "England", role: "Batsman", img: joe },
    { id: 6, name: "Kane Williamson", country: "New Zealand", role: "Batsman", img: kane }
    
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Mapdemo10</h1>

      <table border="4" style={{ margin: "auto", textAlign: "center" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Country</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>
                {player.img ?(
                <img
                  src={player.img}
                  alt={player.name}
                  width="60"
                  height="60"
                  style={{ borderRadius: "50%" }}
                  onError={(e)=>{
                  e.target.style.display = "none";
                  e,target.parentNode.innerHTML = "Image is missing";
                  }}
                />
                ):(
                  "Image is missing"
                )}
              </td>
              <td>{player.name}</td>
              <td>{player.country}</td>
              <td>{player.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
