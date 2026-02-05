import React from 'react'

export const Mapdemo4 = () => {
    var cities = [
    {id:1, name:"Ahmedabad",pop:50000,AQT:300},
    {id:2, name:"Delhi",pop:50000,AQT:300},
    {id:3, name:"Surat",pop:50000,AQT:300}
    ];
  return (
    <div style={{ textAlign: "center"}}>
        <h1>Mapdemo4</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                      <th>Name</th>
                        <th>Population</th>
                          <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                {
                    cities.map((city)=>{
                        return<tr>
                            <td>{city.id}</td>
                            <td>{city.name}</td>
                            <td>{city.pop}</td>
                            <td>{city.AQT}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
