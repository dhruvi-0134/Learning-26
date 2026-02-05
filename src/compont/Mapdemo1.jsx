import React from 'react'

export const Mapdemo1 = () => {
    let cars = ["audi","bmw","kia","jeep","toyota"]
  return (
    <div>
        <h1>Mapdemo1</h1>
        {
            cars.map((c)=>{
                return <h1>{c}</h1>
            })
        }
    </div>
  )
}
