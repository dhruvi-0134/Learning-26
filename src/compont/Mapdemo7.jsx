import React from 'react'

export const Mapdemo7 = () => {
    var products= [
        {id:101,item:"Pen",price:10,qty:100,brand:"Cello"},
        {id:102,item:"Book",price:50,qty:45,brand:"Classmate"},
        {id:103,item:"Box",price:100,qty:60,brand:"Local"},
        {id:104,item:"Bag",price:900,qty:35,brand:"Sky"},
        {id:105,item:"Bottle",price:70,qty:90,brand:"Milton"},
        {id:1016,item:"Scale",price:5,qty:10,brand:"Natraj"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Mapdemo7</h1>
        <table border="2" textAlign = "center">
            <thead>
                <tr>
                 <td>ID</td>
                 <td>Item</td>
                 <td>price</td>
                 <td>Qty</td> 
                 <td>Brand</td>  
                </tr>
            </thead>
            <tbody>
               {
                products.map((product)=>{
                    return<tr>
                        <td>{product.id}</td>
                   <td>{product.item}</td>
                   <td style={{backgroundColor:product.price>50 &&"blue"}}>{product.price}</td>
                   <td style={{color:product.qty>70 && "red"}}>{product.qty}</td>
                   <td>{product.brand}</td>

                    </tr>
                })
               }
            </tbody>
        </table>
    </div>
  )
}
