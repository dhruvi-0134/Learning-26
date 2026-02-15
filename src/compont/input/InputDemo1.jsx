import React, { useState } from 'react'

export const InputDemo1 = () => {
const[name,setName] = useState("")
const [age,setage] = useState("")
const[email,setemail]= useState("")
const[password,setpassword]=useState("")
const[phone,setphone]=useState("")
const[address,setaddress]=useState("")
const[city,setcity]=useState("")
const[state,setsate]=useState("")
const[country,setcountry]=useState("")
const[hobby,sethobby]=useState("")
const nameHeadler = (event)=>{
    console.log(event.target.value)
    setName(event.target.value)
}
const ageHandler = (event)=>{
    setage(event.target.value)
}
const emailHandler =(event)=>{
    console.log(event.target.value)
    setemail(event.target.value)
}
const passwordHandler =(event)=>{
    setpassword(event.target.value)
}
const phoneHandler =(event)=>{
    setphone(event.target,value)
}
const addressHandler =(event)=>{
    setaddress(event.target,value)
}
const cityHandler =(event)=>{
    setcity(event.target.value)
}
const sateHandler =(event)=>{
    setsate(event.target.value)
}
const countryHandler =(event)=>{
    setcountry(event.target.value)
}
const hobbyHandler =(event)=>{
    sethobby(event.target.value)
}
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHeadler(event)}}></input>
             {name}
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{ageHandler(event)}}></input>
            {age}
        </div>
          <div>
            <label>Email</label>
            <input type='text' onChange={(event)=>{emailHandler(event)}}></input>
            {email}
        </div>
         <div>
            <label>password</label>
            <input type='text' onChange={(event)=>{passwordHandler(event)}}></input>
            {password}
        </div>
         <div>
            <label>phone</label>
            <input type='text' onChange={(event)=>{phoneHandler(event)}}></input>
            {phone}
        </div>
         <div>
            <label>address</label>
            <input type='text' onChange={(event)=>{addressHandler(event)}}></input>
            {address}
        </div>
         <div>
            <label>city</label>
            <input type='text' onChange={(event)=>{cityHandler(event)}}></input>
            {city}
        </div>
         <div>
            <label>state</label>
            <input type='text' onChange={(event)=>{sateHandler(event)}}></input>
            {state}
        </div>
         <div>
            <label>country</label>
            <input type='text' onChange={(event)=>{countryHandler(event)}}></input>
            {country}
        </div>
        <div>
            <label>hobby</label>
            <input type='text' onChange={(event)=>{hobbyHandler(event)}}></input>
            {hobby}
        </div>
    </div>
  )
}
