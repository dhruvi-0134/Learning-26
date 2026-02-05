import React from 'react'

export const Mapdemo2 = () => {
     var users = [
        {id:1,name:"dhruvi",age:22,gender:"female"},
        {id:2,name:"Hetvi",age:23,gender:"female"},
        {id:3,name:"Daksh",age:21,gender:"male"}
     ]
  return (
    <div>
        <h1>
            Mapdemo2
        </h1>
        {
            users.map((user)=>{
                return <li>{user.id}-{user.name}-{user.age}-{user.gender}</li>
            })
        }
    </div>
  )
}
