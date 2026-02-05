import React from 'react'

export const Mapdemo9 = () => {
    var orders  =[
        {orderid:111,customer:"Raj",product:"Pen",qty:5,status:"Done"},
        {orderid:111,customer:"Neha",product:"Book",qty:2,status:"Pending"},
        {orderid:111,customer:"Amit",product:"Bag",qty:1,status:"Done"},
        {orderid:111,customer:"Pooja",product:"Bottle",qty:3,status:"Cancel"},
        {orderid:111,customer:"Ravi",product:"Scale",qty:4,status:"Done"},
        {orderid:111,customer:"sita",product:"Box",qty:2,status:"Pending"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Mapdemo9</h1>
        <table border="4" textAlign="center">
            <thead>
                <tr>
                    <td>OrderID</td>
                    <td>Customer</td>
                    <td>Product</td>
                    <td>Qty</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order)=>{
                        return<tr>
                            <td>{order.orderid}</td>
                            <td>{order.customer}</td>
                            <td>{order.product}</td>
                            <td>{order.qty}</td>
                            <td>{order.status}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
