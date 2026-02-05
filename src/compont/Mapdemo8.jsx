import React from 'react'

export const Mapdemo8 = () => {
    var cars =[
        {id:1,model:"Swift",company:"Maruti",price:600000,color:"Red"},
        {id:2,model:"i20",company:"Hyundai",price:1200000,color:"White"},
        {id:3,model:"City",company:"Honda",price:500000,color:"Black"},
        {id:4,model:"Nexon",company:"Tata",price:700000,color:"Blue"},
        {id:5,model:"Alto",company:"Maruti",price:900000,color:"Silver"},
        {id:6,model:"creta",company:"Hyundai",price:1100000,color:"Grey"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Mapdemo8</h1>
        <table border= "3" textAlign="center">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Model</td>
                    <td>Company</td>
                    <td>Price</td>
                    <td>Color</td>
                </tr>
            </thead>
            <tbody>
                {
                    cars.map((car)=>{
                        return<tr key={car.id} style={{backgroundColor:"pink"}}>
                            <td>{car.id}</td>
                            <td>{car.model}</td>
                            <td style={{color:car.company=="maruti"&&"red"}}>{car.company}</td>
                            <td style={{backgroundColor:car.price>800000&&"green"}}>{car.price}</td>
                            <td>{car.color}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
